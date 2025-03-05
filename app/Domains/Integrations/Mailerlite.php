<?php
namespace App\Domains\Integrations;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use MailerLiteApi\Common\Collection;
use MailerLiteApi\MailerLite as MailerLiteApi;

class Mailerlite
{
    protected ?MailerLiteApi $sdk;
    protected ?string $token;

    public function __construct(?string $token = null)
    {
        if ($token === null && Auth::check()) {
            $token = Auth::user()->mailerlite_token;
        }

        $this->token = $token;

        if (!empty($this->token)) {
            $this->sdk = new MailerLiteApi($token);
        }
    }

    public function getGroups(): array
    {
        if (empty($this->token)) {
            return [];
        }

        return Cache::remember('groups' . Auth::id(), 60, function () {
            $results = [];
            $offset = 0;
            $shouldRepeat = true;

            while ($shouldRepeat === true) {
                $items = $this->sdk
                    ->groups()
                    ->limit(100)
                    ->offset($offset)
                    ->get();

                if ($this->isError($items)) {
                    throw new \Exception('Mailerlite error: ' . $items[0]->error->message);
                }

                array_push($results, ...$items->toArray());
                $offset += 100;
                $shouldRepeat = $items->count() === 100;
            }

            return $results;
        });
    }

    protected function isError(array|Collection $response): bool
    {
        if (!isset($response[0])) {
            return false;
        }

        if (isset($response[0]->error)) {
            return true;
        }

        return false;
    }

    public function addToGroup(string $groupId, string $email): void
    {
        $this->sdk->groups()
            ->addSubscriber($groupId, [
                'email' => $email,
            ]);
    }
}
