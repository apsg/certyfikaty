<?php
namespace App\Domains\Attempts\Html;

use App\Domains\Attempts\Models\Attempt;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Spatie\Fractalistic\ArraySerializer;

class ValidateController extends Controller
{
    public function show()
    {
        return Inertia::render('Attempts/Validate');
    }

    public function check(ValidateRequest $request)
    {
        /** @var Attempt $attempt */
        $attempt = Attempt::where('number', $request->input('number'))
            ->firstOrFail();

        return fractal()
            ->item($attempt)
            ->transformWith(new VerifiedAttemptTransformer())
            ->serializeWith(new ArraySerializer());
    }
}
