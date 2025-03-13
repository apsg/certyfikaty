<?php

namespace App\Domains\Cerificates\Html\Api;

use App\Domains\Attempts\Models\Attempt;
use League\Fractal\TransformerAbstract;

class ApiCertificatesTransformer extends TransformerAbstract
{
    public function transform(Attempt $attempt): array
    {
        return [
            'title' => $attempt->certificate->title,
            'url'   => route('attempts.showAttempt', [$attempt->certificate, $attempt]),
            'date'  => $attempt->finished_at?->format('Y-m-d'),
        ];
    }
}
