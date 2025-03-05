<?php
namespace App\Domains\Attempts\Events;

use App\Domains\Integrations\Mailerlite;
use Illuminate\Support\Facades\Log;

class AddUserToMailerliteListener
{
    public function handle(UserGainedCertificateEvent $event): void
    {
        if (!$this->shouldAddToMailerlite($event)) {
            return;
        }

        Log::info('adding to mailerlite', [
            'group' => $event->attempt->certificate->mailerlite_group_id,
            'email' => $event->attempt->email,
        ]);

//        (new Mailerlite($event->attempt->certificate->user->mailerlite_token))
//            ->addToGroup(
//                $event->attempt->certificate->mailerlite_group_id,
//                $event->attempt->email
//            );

        Log::info('Added');
    }

    private function shouldAddToMailerlite(UserGainedCertificateEvent $event): bool
    {
        if (empty($event->attempt->certificate->mailerlite_group_id)) {
            return false;
        }

        if (empty($event->attempt->certificate->user->mailerlite_token)) {
            return false;
        }

        return true;
    }
}
