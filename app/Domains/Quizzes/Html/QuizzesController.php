<?php
namespace App\Domains\Quizzes\Html;

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
        return Inertia::render('Quizzes/Edit', [
            'quiz' => $quiz,
        ]);
    }

    public function update(Quiz $quiz, UpdateQuizRequest $request)
    {
        $quiz->update($request->validated());

        return ['OK'];
    }
}
