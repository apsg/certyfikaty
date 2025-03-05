<?php
namespace App\Domains\Quizzes\Html;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

class UpdateQuizRequest extends FormRequest
{
    public function authorize(): true
    {
        return Gate::check('update', $this->route('quiz'));
    }

    public function rules(): array
    {
        return [
            'name'           => 'required|string|max:255',
            'slug'           => 'required|string|max:255',
            'min_percentage' => 'required|numeric|min:0|max:100',
        ];
    }
}
