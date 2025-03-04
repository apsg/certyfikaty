<?php
namespace App\Domains\Quizzes\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int                   $id
 * @property string                $question
 * @property int                   $quiz_id
 * @property int                   $order
 * @property Carbon                $created_at
 * @property Carbon                $updated_at
 *
 * @property-read QuestionOption[] $options
 * @property-read Quiz             $quiz
 */
class Question extends Model
{
    use HasFactory;

    protected $fillable = ['question', 'quiz_id', 'order'];

    public function options(): HasMany
    {
        return $this->hasMany(QuestionOption::class);
    }

    public function quiz(): BelongsTo
    {
        return $this->belongsTo(Quiz::class);
    }

    protected static function newFactory(): QuestionFactory
    {
        return new QuestionFactory();
    }

    public function isCorrect(array $selected = []): bool
    {
        $correct = $this->options->filter(function (QuestionOption $option) {
            return $option->is_correct;
        })->pluck('id');

        if (count($correct) !== count($selected)) {
            return false;
        }

        foreach ($correct as $id) {
            if (!in_array($id, $selected)) {
                return false;
            }
        }

        return true;
    }
}
