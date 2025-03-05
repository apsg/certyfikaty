<?php
namespace App\Domains\Cerificates\Html;

use App\Domains\Cerificates\Models\Certificate;
use App\Domains\Cerificates\Models\Layout;
use App\Domains\Integrations\Mailerlite;
use App\Domains\Quizzes\Models\Quiz;
use App\Http\Controllers\Controller;
use Faker\Factory;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CertificatesController extends Controller
{
    public function index()
    {
        return Inertia::render('Certificates/Index', [
            'certificates' => Certificate::forUser(Auth::user())->get(),
        ]);
    }

    public function create()
    {
        $this->authorize('create', Certificate::class);

        $certificate = Certificate::create([
            'user_id' => Auth::user()->id,
            'title'   => 'Tytuł certyfikatu (co pojawi się na certyfikacie)',
            'slug'    => Factory::create()->slug,
        ]);

        return redirect()->route('admin.certificates.edit', $certificate);
    }

    public function edit(Certificate $certificate, Mailerlite $mailerlite)
    {
        return Inertia::render('Certificates/Edit', [
            'certificate' => $certificate,
            'layouts'     => Layout::forUser(Auth::user())->get(),
            'quizzes'     => Quiz::forUser(Auth::user())->get(),
            'groups'      => $mailerlite->getGroups(),
        ]);
    }

    public function update(Certificate $certificate, UpdateCertificateRequest $request)
    {
        $certificate->update([
            'title'               => $request->input('title'),
            'slug'                => $request->input('slug'),
            'date'                => $request->date,
            'quiz_id'             => $request->quiz ? $request->quiz->id : null,
            'layout_id'           => $request->layout->id,
            'mailerlite_group_id' => $request->input('mailerlite_group_id'),
        ]);

        return ['ok'];
    }
}
