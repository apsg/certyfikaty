<?php
namespace App\Domains\Attempts\Html;

use App\Domains\Attempts\Models\Attempt;
use Illuminate\Support\Str;
use League\Fractal\TransformerAbstract;

class VerifiedAttemptTransformer extends TransformerAbstract
{
    public function transform(Attempt $attempt): array
    {
        return [
            'name'  => $this->name($attempt),
            'date'  => $this->date($attempt),
            'title' => $attempt->certificate->title,
        ];
    }

    protected function name(Attempt $attempt): string
    {
        return Str::of($attempt->name)
            ->explode(' ')
            ->map(function (string $part) {
                return substr($part, 0, 2) . '***';
            })
            ->implode(' ');
    }

    protected function date(Attempt $attempt): string
    {
        if ($attempt->certificate->date) {
            return $attempt->certificate->date->format('Y-m-d');
        }

        return $attempt->finished_at->format('Y-m-d');
    }
}
