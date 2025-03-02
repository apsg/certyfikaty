<?php
namespace App\Domains\Cerificates\Html;

use App\Domains\Cerificates\Models\Layout;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

class LayoutFileUploadRequest extends FormRequest
{
    public function authorize(): bool
    {
        return Gate::check('create', Layout::class);
    }

    public function rules(): array
    {
        return [
            'file' => 'required|file|mimes:pdf|max:10240',
        ];
    }
}
