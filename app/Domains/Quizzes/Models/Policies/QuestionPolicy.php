<?php

namespace App\Domains\Quizzes\Models\Policies;

use App\Domains\Quizzes\Models\Question;
use App\Models\User;

class QuestionPolicy
{
    public function view(User $user, Question $question): bool
    {
        return $question->quiz->user_id === $user->id;
    }

    public function create(User $user): bool
    {
        return true;
    }

    public function update(User $user, Question $question): bool
    {
        return $question->quiz->user_id === $user->id;
    }

    public function delete(User $user, Question $question): bool
    {
        return $question->quiz->user_id === $user->id;
    }
}
