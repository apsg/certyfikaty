<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AuthorizeApiRequestMiddleware
{
    const HEADER_NAME = 'X-CERTIFICATES-KEY';

    public function handle(Request $request, Closure $next)
    {
        if (!$this->verifyHeader($request)){
            return response('Unauthorized.', 401);
        }

        return $next($request);
    }

    public function verifyHeader(Request $request) : bool
    {
        if (!$request->hasHeader(static::HEADER_NAME)) {
            return false;
        }

        if (empty($request->header(static::HEADER_NAME))) {
            return false;
        }

        if ($request->header(static::HEADER_NAME) === config('auth.api_key')) {
            return true;
        }

        return false;
    }
}
