<?php
namespace App\Domains\Attempts\Html;

use Illuminate\Foundation\Http\FormRequest;

class FinishAttemptRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'answers'            => 'required|array',
            'answers.*'          => 'required|array',
            'answers.*.id'       => 'required|integer',
            'answers.*.selected' => 'required|array',
        ];
    }
}
