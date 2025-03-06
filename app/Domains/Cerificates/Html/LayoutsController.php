<?php
namespace App\Domains\Cerificates\Html;

use App\Domains\Cerificates\CertificateGenerator;
use App\Domains\Cerificates\Models\Layout;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class LayoutsController extends Controller
{
    public function index()
    {
        $layouts = Layout::forUser(Auth::user())
            ->orderBy('name')
            ->get();

        return Inertia::render('Layouts/Index')
            ->with([
                'layouts' => $layouts,
                'title'   => 'Szablony',
            ]);
    }

    public function store(LayoutFileUploadRequest $request)
    {
        try {
            $path = $request->file('file')->store('public/layouts');
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Wystąpił błąd podczas zapisywania pliku',
            ], 500);
        }

        $layout = Layout::create([
            'name'    => $request->file('file')->getClientOriginalName(),
            'file'    => $path,
            'user_id' => Auth::user()->id,
        ]);

        return [
            'id' => $layout->id,
        ];
    }

    public function edit(Layout $layout)
    {
        return Inertia::render('Layouts/Edit')
            ->with([
                'layout' => $layout,
            ]);
    }

    public function update(Layout $layout, LayoutUpdateRequest $request)
    {
        $layout->update($request->validated());

        return ['ok'];
    }

    public function destroy(Layout $layout)
    {
        $this->authorize('delete', $layout);

        $layout->delete();

        return redirect(route('admin.layouts.index'));
    }

    public function test(Layout $layout)
    {
        $certificate = new CertificateGenerator($layout);
        $certificate->setDate(Carbon::now()->format('Y-m-d'))
            ->setName('Antoni Brzęczyszczykiewicz')
            ->setTitle('Kurs Excel \nw godzinę jakiś bardzo długi \n tekst na wdisajdksaj sadj sakldj aksd sahd as dsand asjd sajd sajdk asjkla')
            ->setNumber('1234567');

        return response($certificate->generate(), 200, [
            'Content-Type' => 'application/pdf',
        ]);
    }
}
