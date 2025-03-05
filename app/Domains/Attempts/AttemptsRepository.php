<?php
namespace App\Domains\Attempts;

use App\Domains\Attempts\Exceptions\AlreadyPassedException;
use App\Domains\Attempts\Exceptions\AnotherAttemptTooSoonException;
use App\Domains\Attempts\Models\Attempt;
use App\Domains\Cerificates\Models\Certificate;
use App\Domains\Quizzes\Models\Question;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;

class AttemptsRepository
{
    public function new(Certificate $certificate, string $name, string $email): Attempt
    {
        return Attempt::firstOrCreate([
            'certificate_id' => $certificate->id,
            'name'           => $name,
            'email'          => $email,
            'is_passed'      => false,
            'finished_at'    => null,
        ], [
            'number' => bin2hex(random_bytes(4)),
        ]);
    }

    public function check(Certificate $certificate, string $email): void
    {
        if (Attempt::where('certificate_id', $certificate->id)
            ->where('email', $email)
            ->where('is_passed', true)
            ->exists()) {
            throw new AlreadyPassedException();
        }

        $attempt = Attempt::where('certificate_id', $certificate->id)
            ->where('email', $email)
            ->where('is_passed', false)
            ->whereNotNull('finished_at')
            ->where('created_at', '>', now()->subDays(14))
            ->orderBy('created_at', 'desc')
            ->first();

        if ($attempt !== null) {
            throw new AnotherAttemptTooSoonException($attempt->created_at);
        }
    }

    public function finish(Attempt $attempt): Attempt
    {
        $attempt->update([
            'is_passed'   => true,
            'finished_at' => now(),
        ]);

        return $attempt;
    }

    public function checkAnswers(Attempt $attempt, array $answers): bool
    {
        /** @var Collection $questions */
        $questions = $attempt->certificate->quiz->questions;

        $points = 0;

        foreach ($answers as $answer) {
            /** @var Question $question */
            $question = $questions->find($answer['id']);

            if ($question === null) {
                continue;
            }
            $result = $question->isCorrect($answer['selected']);

            if ($result === true) {
                $points += 1;
            }
        }

        $isPassed = (($points / $questions->count()) >= ($attempt->certificate->quiz->min_percentage / 100));

        $attempt->update([
            'is_passed'   => $isPassed,
            'answers'     => $answers,
            'score'       => $points,
            'finished_at' => Carbon::now(),
        ]);

        return $isPassed;
    }
}
