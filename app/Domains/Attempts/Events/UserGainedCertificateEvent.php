<?php

namespace App\Domains\Attempts\Events;

use App\Domains\Attempts\Models\Attempt;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class UserGainedCertificateEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public Attempt $attempt;

    /**
     * Create a new event instance.
     */
    public function __construct(Attempt $attempt)
    {
        //
        $this->attempt = $attempt;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new PrivateChannel('channel-name'),
        ];
    }
}
