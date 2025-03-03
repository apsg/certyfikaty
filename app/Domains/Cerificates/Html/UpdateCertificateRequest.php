<?php
namespace App\Domains\Cerificates\Html;

use App\Domains\Cerificates\Models\Layout;
use App\Domains\Quizzes\Models\Quiz;
use Carbon\Carbon;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

class UpdateCertificateRequest extends FormRequest
{
    public ?Quiz $quiz = null;
    public Layout $layout;
    public ?Carbon $date = null;

    public function authorize(): bool
    {
        return Gate::allows('update', $this->route('certificate'));
    }

    public function rules(): array
    {
        return [
            'title'     => ['required', 'string'],
            'slug'      => ['required', 'string', 'unique:certificates,slug,' . $this->route('certificate')->id],
            'date'      => ['nullable', 'date'],
            'quiz_id'   => ['nullable', 'integer', 'exists:quizzes,id'],
            'layout_id' => ['nullable', 'integer', 'exists:layouts,id'],
        ];
    }

    protected function passedValidation(): void
    {
        if (!empty($this->input('quiz_id'))) {
            $this->quiz = Quiz::forUser($this->user())
                ->findOrFail($this->input('quiz_id'));
        }

        if (!empty($this->input('layout_id'))) {
            $this->layout = Layout::forUser($this->user())
                ->findOrFail($this->input('layout_id'));
        }

        if (!empty($this->input('date'))) {
            $this->date = Carbon::parse($this->input('date'));
        } else {
            $this->date = null;
        }
    }
}
