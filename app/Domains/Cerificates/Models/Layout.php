<?php
namespace App\Domains\Cerificates\Models;

use App\HasUserTrait;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int      id
 * @property string   name
 * @property int      user_id
 * @property string   file
 * @property int      date_position_top
 * @property int|null date_position_left
 * @property int      date_font_size
 * @property int      name_position_top
 * @property int|null name_position_left
 * @property int      name_font_size
 * @property int      title_position_top
 * @property int|null title_position_left
 * @property int      title_font_size
 * @property int      number_position_top
 * @property int|null number_position_left
 * @property int      number_font_size
 * @property Carbon   created_at
 * @property Carbon   updated_at
 */
class Layout extends Model
{
    use HasUserTrait;

    protected $fillable = [
        'name',
        'file',
        'user_id',

        'date_position_top',
        'date_position_left',
        'date_font_size',

        'name_position_top',
        'name_position_left',
        'name_font_size',

        'title_position_top',
        'title_position_left',
        'title_font_size',

        'number_position_top',
        'number_position_left',
        'number_font_size',
    ];

}
