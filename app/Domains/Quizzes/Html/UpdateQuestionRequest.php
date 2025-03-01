<?php
namespace App\Domains\Quizzes\Html;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

class UpdateQuestionRequest extends FormRequest
{
    public function authorize(): true
    {
        return Gate::check('update', $this->route('question'));
    }

    public function rules(): array
    {
        return [
            'question' => 'required|string',
        ];
    }
}
