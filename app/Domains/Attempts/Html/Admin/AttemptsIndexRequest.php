<?php
namespace App\Domains\Attempts\Html\Admin;

use Illuminate\Foundation\Http\FormRequest;

class AttemptsIndexRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'search' => 'nullable|string|max:255',
        ];
    }
}
