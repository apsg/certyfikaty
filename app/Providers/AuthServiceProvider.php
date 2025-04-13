<?php
namespace App\Providers;

use App\Domains\Attempts\Models\Attempt;
use App\Domains\Attempts\Models\AttemptPolicy;
use App\Domains\Cerificates\Models\Certificate;
use App\Domains\Cerificates\Models\Layout;
use App\Domains\Cerificates\Models\Policies\CertificatePolicy;
use App\Domains\Cerificates\Models\Policies\LayoutPolicy;
use App\Domains\Quizzes\Models\Policies\QuestionPolicy;
use App\Domains\Quizzes\Models\Policies\QuizPolicy;
use App\Domains\Quizzes\Models\Question;
use App\Domains\Quizzes\Models\Quiz;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    protected $policies = [
        Certificate::class => CertificatePolicy::class,
        Attempt::class     => AttemptPolicy::class,
        Question::class    => QuestionPolicy::class,
        Quiz::class        => QuizPolicy::class,
        Layout::class      => LayoutPolicy::class,
    ];

    public function boot(): void
    {
    }
}
