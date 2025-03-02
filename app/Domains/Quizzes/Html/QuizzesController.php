<?php
namespace App\Domains\Quizzes\Html;

use App\Domains\Quizzes\Models\Question;
use App\Domains\Quizzes\Models\QuestionOption;
use App\Domains\Quizzes\Models\Quiz;
use App\Domains\Quizzes\QuizRepository;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

class QuizzesController extends Controller
{
    public function index()
    {
        return Inertia::render('Quizzes/Index', [
            'filters' => request()->all(['search', 'field', 'order']),
            'title'   => 'Testy',
            'quizzes' => Quiz::forUser(auth()->user())->get(),
        ]);
    }

    public function create(QuizRepository $quizRepository)
    {
        $quiz = $quizRepository->create(auth()->user());

        return redirect()->route('admin.quizzes.edit', $quiz);
    }

    public function edit(Quiz $quiz)
    {
        $quiz->load('questions.options');

        return Inertia::render('Quizzes/Edit', [
            'quiz' => $quiz,
        ]);
    }

    public function update(Quiz $quiz, UpdateQuizRequest $request)
    {
        $quiz->update($request->validated());

        return ['OK'];
    }

    public function destroy(Quiz $quiz)
    {
        $this->authorize('delete', $quiz);

        $quiz->delete();

        return redirect(route('admin.quizzes.index'));
    }

    public function addQuestion(Quiz $quiz)
    {
        Question::factory()
            ->has(QuestionOption::factory()->count(4), 'options')
            ->create([
                'quiz_id' => $quiz->id,
                'order'   => $quiz->getMaxOrder() + 1,
            ]);

        $quiz->load('questions.options');

        return back();
    }
}
