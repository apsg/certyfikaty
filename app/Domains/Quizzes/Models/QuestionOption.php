<?php
namespace App\Domains\Quizzes\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int    $id
 * @property string $option
 * @property int    $question_id
 * @property bool   $is_correct
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @property-read Question $question
 */
class QuestionOption extends Model
{
    use HasFactory;

    protected $fillable = ['option', 'question_id', 'is_correct'];

    public function question(): BelongsTo
    {
        return $this->belongsTo(Question::class);
    }

    protected static function newFactory(): QuestionOptionFactory
    {
        return new QuestionOptionFactory();
    }
}
