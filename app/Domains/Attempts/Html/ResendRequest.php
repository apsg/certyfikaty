<?php
namespace App\Domains\Attempts\Html;

use Illuminate\Foundation\Http\FormRequest;

class ResendRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'email' => 'required|email',
        ];
    }
}
