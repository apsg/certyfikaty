<?php
namespace App\Domains\Cerificates\Html;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

class LayoutUpdateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return Gate::allows('update', $this->route('layout'));
    }

    public function rules(): array
    {
        return [
            'name'                 => 'required|string',
            'date_position_top'    => 'required|numeric|min:0',
            'date_position_left'   => 'numeric|min:0|nullable',
            'date_font_size'       => 'required|numeric|min:0',
            'name_position_top'    => 'required|numeric|min:0',
            'name_position_left'   => 'numeric|min:0|nullable',
            'name_font_size'       => 'required|numeric|min:0',
            'title_position_top'   => 'required|numeric|min:0',
            'title_position_left'  => 'numeric|min:0|nullable',
            'title_font_size'      => 'required|numeric|min:0',
            'number_position_top'  => 'required|numeric|min:0',
            'number_position_left' => 'numeric|min:0|nullable',
            'number_font_size'     => 'required|numeric|min:0',
        ];
    }
}
