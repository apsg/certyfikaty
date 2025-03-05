<?php
namespace App\Domains\Attempts\Html;

use Illuminate\Foundation\Http\FormRequest;

class ValidateRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'number' => 'required|string|size:8|exists:attempts,number',
        ];
    }

    public function messages(): array
    {
        return [
            'number.required' => 'Numer jest wymagany',
            'number.string'   => 'Numer musi być ciągiem znaków',
            'number.size'   => 'Numer powinien składać się z 8 znaków',
            'number.exists'   => 'Nie wydaliśmy certyfikatu o takim numerze',
        ];
    }
}
