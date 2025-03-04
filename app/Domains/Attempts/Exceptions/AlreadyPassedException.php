<?php
namespace App\Domains\Attempts\Exceptions;

class AlreadyPassedException extends \Exception
{
    protected $code = 409;
    protected $message = 'Już uzyskano ten certyfikat. Sprawdź swoją skrzynkę e-mail.';
}
