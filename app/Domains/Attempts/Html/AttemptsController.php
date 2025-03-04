<?php
namespace App\Domains\Attempts\Html;

use App\Domains\Attempts\AttemptsRepository;
use App\Domains\Attempts\Exceptions\AlreadyPassedException;
use App\Domains\Attempts\Exceptions\AnotherAttemptTooSoonException;
use App\Domains\Attempts\Models\Attempt;
use App\Domains\Cerificates\CertificateGenerator;
use App\Domains\Cerificates\Models\Certificate;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Spatie\Fractalistic\ArraySerializer;

class AttemptsController extends Controller
{
    public function show(Certificate $certificate)
    {
        return Inertia::render('Attempts/Show', [
            'certificate' => $certificate,
        ]);
    }

    public function store(Certificate $certificate, CreateAttemptRequest $request, AttemptsRepository $repository)
    {
        try {
            $repository->check($certificate, $request->input('email'));
        } catch (AlreadyPassedException|AnotherAttemptTooSoonException $exception) {
            abort($exception->getCode(), $exception->getMessage());
        }

        $attempt = $repository->new($certificate, $request->input('name'), $request->input('email'));

        return [
            'url' => route('attempts.showAttempt', [$certificate, $attempt]),
        ];
    }

    public function showAttempt(Certificate $certificate, Attempt $attempt, AttemptsRepository $repository)
    {
        if ($attempt->isFinished()) {
            return $this->showStatus($certificate, $attempt);
        }

        return $this->quiz($certificate, $attempt);
    }

    public function quiz(Certificate $certificate, Attempt $attempt)
    {
        $certificate->load('quiz.questions.options');

        return Inertia::render('Attempts/Quiz', [
            'certificate' => $certificate,
            'attempt'     => $attempt,
        ]);
    }

    public function finish(
        Certificate $certificate,
        Attempt $attempt,
        FinishAttemptRequest $request,
        AttemptsRepository $repository
    ) {
        if ($attempt->isFinished()) {
            abort(409, 'Już ukończono to podejście');
        }

        $isPassed = $repository->checkAnswers($attempt, $request->input('answers'));

        if ($isPassed) {
            return ['ok'];
        } else {
            abort(409, 'nope');
        }
    }

    public function showStatus(Certificate $certificate, Attempt $attempt)
    {
        $attempt->load('certificate');

        return Inertia::render('Attempts/Status', [
            'attempt' => fractal()
                ->item($attempt)
                ->transformWith(new AttemptStatusTransformer())
                ->serializeWith(new ArraySerializer()),
        ]);
    }

    public function download(Attempt $attempt)
    {
        return (new CertificateGenerator($attempt->certificate->layout))
            ->setDate($attempt->finished_at->format('Y-m-d'))
            ->setName($attempt->name)
            ->setTitle($attempt->certificate->title)
            ->setNumber($attempt->number)
            ->generate();
    }
}
