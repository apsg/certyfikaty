<?php
namespace App\Domains\Quizzes;

use App\Domains\Quizzes\Models\Question;

class QuestionRepository
{
    public function moveUp(Question $question): void
    {
        if ($question->order <= 0) {
            $question->update(['order' => 0]);

            return;
        }

        $previousQuestion = $question->quiz->questions()
            ->where('order', '<', $question->order)
            ->orderBy('order', 'desc')
            ->first();

        if ($previousQuestion !== null) {
            $previousQuestion->update([
                'order' => $question->order,
            ]);
        }

        $question->update([
            'order' => $question->order - 1,
        ]);
    }

    public function moveDown(Question $question): void
    {
        if ($question->order >= $question->quiz->getMaxOrder()) {
            $question->update(['order' => $question->quiz->getMaxOrder()]);

            return;
        }

        $nextQuestion = $question->quiz->questions()
            ->where('order', '>', $question->order)
            ->orderBy('order')
            ->first();

        if ($nextQuestion !== null) {
            $nextQuestion->update([
                'order' => $question->order,
            ]);
        }

        $question->update([
            'order' => $question->order + 1,
        ]);
    }
}
