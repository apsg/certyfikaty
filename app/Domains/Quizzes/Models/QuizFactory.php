<?php

namespace App\Domains\Quizzes\Models;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class QuizFactory extends Factory
{
    public function modelName(): string
    {
        return Quiz::class;
    }

    public function definition(): array
    {
        return [
            'name'    => 'Nowy test',
            'slug'    => Str::lower(Str::random(7)),
        ];
    }
}
