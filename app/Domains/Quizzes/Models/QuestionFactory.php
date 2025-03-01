<?php

namespace App\Domains\Quizzes\Models;

use Illuminate\Database\Eloquent\Factories\Factory;

class QuestionFactory extends Factory
{
    public function modelName(): string
    {
        return Question::class;
    }

    public function definition(): array
    {
        return [
            'question' => 'Podaj pytanie',
            'order'    => 0,
        ];
    }
}
