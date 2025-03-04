<?php
namespace App\Domains\Attempts\Exceptions;

class AnotherAttemptTooSoonException extends \Exception
{
    protected $code = 409;
    protected $message = 'Zbyt szybko próbujesz ponownie. Musisz odczekać 14 dni od poprzedniego nieudanego podejścia.';
}
