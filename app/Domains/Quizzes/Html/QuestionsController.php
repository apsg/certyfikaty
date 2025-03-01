<?php
namespace App\Domains\Quizzes\Html;

use App\Domains\Quizzes\Models\Question;
use App\Domains\Quizzes\QuestionRepository;
use App\Http\Controllers\Controller;

class QuestionsController extends Controller
{
    public function update(Question $question, UpdateQuestionRequest $request)
    {
        $question->update($request->validated());

        return ['OK'];
    }

    public function destroy(Question $question)
    {
        $this->authorize('delete', $question);

        $question->delete();

        return redirect(route('admin.quizzes.edit', $question->quiz));
    }

    public function up(Question $question, QuestionRepository $repository)
    {
        $this->authorize('update', $question);

        $repository->moveUp($question);

        return redirect(route('admin.quizzes.edit', $question->quiz));
    }

    public function down(Question $question, QuestionRepository $repository)
    {
        $this->authorize('update', $question);

        $repository->moveDown($question);

        return redirect(route('admin.quizzes.edit', $question->quiz));
    }
}
