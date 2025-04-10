<?php
namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Collection;

class ResendAttemptsMail extends Mailable
{
    use Queueable, SerializesModels;

    public Collection $attempts;

    public function __construct(Collection $attempts)
    {
        $this->attempts = $attempts;
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Twoje certyfikaty w systemie' . config('app.name'),
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'mail.resend-attempts-mail',
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
