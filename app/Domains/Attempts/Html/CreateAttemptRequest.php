<?php
namespace App\Domains\Attempts\Html;

use Illuminate\Foundation\Http\FormRequest;

class CreateAttemptRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'email'   => 'required|email',
            'name'    => 'required|string',
        ];
    }

    public function messages(): array
    {
        return [
            'email.required' => 'Email jest wymagany',
            'email.email'    => 'Email musi być poprawny',
            'name.required'  => 'Imię i nazwisko są wymagane',
            'name.string'    => 'Imię i nazwisko musi być tekstem',
        ];
    }
}
