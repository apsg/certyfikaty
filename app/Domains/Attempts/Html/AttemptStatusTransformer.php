<?php
namespace App\Domains\Attempts\Html;

use App\Domains\Attempts\Models\Attempt;
use League\Fractal\TransformerAbstract;

class AttemptStatusTransformer extends TransformerAbstract
{
    public function transform(Attempt $attempt): array
    {
        return [
            'id'            => $attempt->id,
            'is_passed'     => $attempt->is_passed,
            'score'         => $attempt->score,
            'name'          => $attempt->name,
            'email'         => $attempt->email,
            'date'          => $attempt->finished_at->format('Y-m-d H:i'),
            'percentage'    => $this->getPercentage($attempt),
            'download_link' => route('download', $attempt),
            'title'         => $attempt->certificate->title,
            'has_quiz'      => $attempt->certificate->hasQuiz(),
        ];
    }

    private function getPercentage(Attempt $attempt): ?string
    {
        if (!$attempt->certificate->hasQuiz()) {
            return null;
        }

        return number_format(100 * $attempt->score / count($attempt->certificate->quiz->questions), 2);
    }
}
