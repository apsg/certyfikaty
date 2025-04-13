<?php
namespace App\Domains\Attempts\Html\Admin;

use App\Domains\Cerificates\Models\Certificate;
use Illuminate\Foundation\Http\FormRequest;

class AttemptStoreRequest extends FormRequest
{
    protected ?Certificate $certificate = null;

    public function authorize(): bool
    {
        $certificate = $this->certificate();

        return $this->user()->can('view', $certificate);
    }

    public function rules(): array
    {
        return [
            'name'           => 'required|string|max:255',
            'email'          => 'required|email|max:255',
            'certificate_id' => 'required|exists:certificates,id',
        ];
    }

    public function certificate(): Certificate
    {
        if (is_null($this->certificate)) {
            $this->certificate = Certificate::findOrFail($this->input('certificate_id'));
        }

        return $this->certificate;
    }
}
