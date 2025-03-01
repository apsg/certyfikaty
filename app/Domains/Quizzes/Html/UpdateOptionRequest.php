<?php
namespace App\Domains\Quizzes\Html;

use App\Domains\Quizzes\Models\QuestionOption;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

class UpdateOptionRequest extends FormRequest
{
    public function authorize(): true
    {
        /** @var QuestionOption $option */
        $option = $this->route('option');

        return Gate::check('update', $option->question);
    }

    public function rules(): array
    {
        return [
            'option'     => 'required|string',
            'is_correct' => 'required|boolean',
        ];
    }
}
