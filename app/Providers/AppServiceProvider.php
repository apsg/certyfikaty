<?php

namespace App\Providers;

use App\Domains\Cerificates\Models\Layout;
use App\Domains\Cerificates\Models\Policies\LayoutPolicy;
use App\Domains\Quizzes\Models\Policies\QuestionPolicy;
use App\Domains\Quizzes\Models\Policies\QuizPolicy;
use App\Domains\Quizzes\Models\Question;
use App\Domains\Quizzes\Models\Quiz;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        //
    }

    public function boot(): void
    {
        Gate::policy(Question::class, QuestionPolicy::class);
        Gate::policy(Quiz::class, QuizPolicy::class);
        Gate::policy(Layout::class, LayoutPolicy::class);
    }
}
