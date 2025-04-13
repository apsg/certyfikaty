<?php
namespace App\Domains\Attempts\Html\Admin;

use App\Domains\Attempts\Models\Attempt;
use App\Http\Controllers\Controller;
use App\Mail\CertificateMail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class AttemptsController extends Controller
{
    public function index(AttemptsIndexRequest $request)
    {
        $attempts = Attempt::forUser(Auth::user())
            ->with(['certificate']);

        if ($request->has('search')) {
            $attempts->where(function ($query) use ($request) {
                $query->where('name', 'LIKE', "%" . $request->input('search') . "%")
                    ->orWhere('email', 'LIKE', "%" . $request->input('search') . "%")
                    ->orWhere('number', 'LIKE', "%" . $request->input('search') . "%")
                    ->orWhereHas('certificate', function ($query) use ($request) {
                        $query->where('title', 'LIKE', "%" . $request->input('search') . "%");
                    });
            });
        }

        $attempts = $attempts->paginate(25);

        return Inertia::render('AdminAttempts/Index', [
            'attempts' => $attempts,
            'filters'  => $request->all(['search', 'field', 'order']),
            'title'    => 'Podejścia do certyfikatów',
        ]);
    }

    public function reset(Attempt $attempt)
    {
        if ($attempt->is_passed) {
            return ['ok'];
        }

        $attempt->update([
            'is_passed'   => false,
            'score'       => 0,
            'answers'     => [],
            'finished_at' => null,
        ]);

        return ['ok'];
    }

    public function resend(Attempt $attempt)
    {
        $this->authorize('view', $attempt);

        Mail::to($attempt->email)
            ->send(new CertificateMail(
                $attempt->certificate->title,
                route('attempts.showAttempt', [$attempt->certificate, $attempt])
            ));

        return ['ok'];
    }
}
