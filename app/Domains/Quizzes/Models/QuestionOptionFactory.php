<?php
namespace App\Domains\Quizzes\Models;

use Illuminate\Database\Eloquent\Factories\Factory;

class QuestionOptionFactory extends Factory
{
    public function definition(): array
    {
        return [
            'option'     => 'Podaj odpowiedź',
            'is_correct' => false,
        ];
    }

    public function modelName(): string
    {
        return QuestionOption::class;
    }
}
