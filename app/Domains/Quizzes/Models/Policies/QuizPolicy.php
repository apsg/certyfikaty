<?php
namespace App\Domains\Quizzes\Models\Policies;

use App\Domains\Quizzes\Models\Quiz;
use App\Models\User;

class QuizPolicy
{
    public function view(User $user, Quiz $quiz): bool
    {
        return $quiz->user_id === $user->id;
    }

    public function create(User $user): bool
    {
        return true;
    }

    public function update(User $user, Quiz $quiz): bool
    {
        return $quiz->user_id === $user->id;
    }

    public function delete(User $user, Quiz $quiz): bool
    {
        return $quiz->user_id === $user->id;
    }
}
