<?php
namespace App\Domains\Attempts\Events;

use App\Mail\CertificateMail;
use Illuminate\Support\Facades\Mail;

class SendCertificateEmailListener
{
    public function handle(UserGainedCertificateEvent $event): void
    {
        $attempt = $event->attempt;
        $certificate = $event->attempt->certificate;

        Mail::to($attempt->email)
            ->send(new CertificateMail(
                $certificate->title,
                route('attempts.showAttempt', [$certificate, $attempt])
            ));
    }
}
