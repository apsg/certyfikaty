<?php
namespace App\Domains\Attempts\Html\Admin;

use App\Domains\Attempts\AttemptsRepository;
use App\Domains\Attempts\Events\UserGainedCertificateEvent;
use App\Domains\Attempts\Models\Attempt;
use App\Domains\Cerificates\Models\Certificate;
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
        $certificates = Certificate::forUser(Auth::user())->get();

        return Inertia::render('AdminAttempts/Index', [
            'attempts'     => $attempts,
            'filters'      => $request->all(['search', 'field', 'order']),
            'title'        => 'Podejścia do certyfikatów',
            'certificates' => $certificates,
        ]);
    }

    public function reset(Attempt $attempt)
    {
        if ($attempt->is_passed) {
            return back()->with('success', 'Użytkownik już zaliczył ten test.');
        }

        $attempt->update([
            'is_passed'   => false,
            'score'       => 0,
            'answers'     => [],
            'finished_at' => null,
        ]);

        return back()->with('success', 'Zresetowano.');
    }

    public function resend(Attempt $attempt)
    {
        $this->authorize('view', $attempt);

        Mail::to($attempt->email)
            ->send(new CertificateMail(
                $attempt->certificate->title,
                route('attempts.showAttempt', [$attempt->certificate, $attempt])
            ));

        return back()->with('success', 'Wysłano.');
    }

    public function store(AttemptStoreRequest $request, AttemptsRepository $repository)
    {
        $attempt = $repository->createManual($request->certificate(), $request->input('name'),
            $request->input('email'));
        event(new UserGainedCertificateEvent($attempt));

        return back()->with('success', 'Utworzono i wysłano.');
    }
}
