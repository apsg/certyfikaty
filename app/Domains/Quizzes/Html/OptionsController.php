<?php
namespace App\Domains\Quizzes\Html;

use App\Domains\Quizzes\Models\QuestionOption;
use App\Http\Controllers\Controller;

class OptionsController extends Controller
{
    public function update(QuestionOption $option, UpdateOptionRequest $request)
    {
        $option->update($request->validated());

        return ['OK'];
    }

    public function destroy(QuestionOption $option)
    {
        $this->authorize('update', $option->question);

        $option->delete();

        return redirect(route('admin.quizzes.edit', $option->question->quiz));
    }
}
