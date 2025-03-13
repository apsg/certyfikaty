<?php
namespace App\Domains\Cerificates\Html\Api;

use App\Domains\Attempts\Models\Attempt;
use App\Http\Controllers\Controller;
use Spatie\Fractalistic\ArraySerializer;

class CertificatesController extends Controller
{
    public function search(SearchRequest $request)
    {
        $attempts = Attempt::passed()
            ->forEmail($request->input('email'))
            ->orderBy('finished_at', 'desc')
            ->get();

        return fractal()
            ->collection($attempts)
            ->transformWith(new ApiCertificatesTransformer())
            ->serializeWith(new ArraySerializer());
    }
}
