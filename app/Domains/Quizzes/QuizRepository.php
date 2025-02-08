<?php
namespace App\Domains\Quizzes;

use App\Domains\Quizzes\Models\Quiz;
use App\Models\User;
use Illuminate\Support\Str;

class QuizRepository
{
    public function create(User $user, string $name = null, string $slug = null): Quiz
    {
        return Quiz::factory()->create(array_filter([
            'name'    => $name,
            'slug'    => $slug,
            'user_id' => $user->id,
        ]));
    }
}
