<?php
namespace App\Domains\Attempts\Html;

use App\Domains\Attempts\AttemptsRepository;
use App\Http\Controllers\Controller;
use App\Mail\ResendAttemptsMail;
use Illuminate\Support\Facades\Mail;

class AttemptReminderController extends Controller
{
    public function __invoke(ResendRequest $request, AttemptsRepository $repository)
    {
        $attempts = $repository->find($request->input('email'));

        Mail::to($request->input('email'))
            ->send(new ResendAttemptsMail($attempts));

        return ['ok'];
    }
}
