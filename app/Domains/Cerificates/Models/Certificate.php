<?php
namespace App\Domains\Cerificates\Models;

use App\Domains\Attempts\Models\Attempt;
use App\Domains\Quizzes\Models\Quiz;
use App\HasUserTrait;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int            id
 * @property string         $slug
 * @property string         $title
 * @property Carbon|null    $date
 * @property int            $user_id
 * @property int            $layout_id
 * @property int|null       $quiz_id
 * @property string|null    $mailerlite_group_id
 * @property Carbon         $created_at
 * @property Carbon         $updated_at
 *
 * @property-read Layout    $layout
 * @property-read Quiz      $quiz
 * @property-read Attempt[] $attempts
 */
class Certificate extends Model
{
    use HasUserTrait;

    protected $fillable = [
        'slug',
        'title',
        'date',
        'user_id',
        'layout_id',
        'quiz_id',
        'mailerlite_group_id',
    ];

    protected $casts = [
        'date' => 'date',
    ];

    public function layout(): BelongsTo
    {
        return $this->belongsTo(Layout::class);
    }

    public function quiz(): BelongsTo
    {
        return $this->belongsTo(Quiz::class);
    }

    public function attempts(): HasMany
    {
        return $this->hasMany(Attempt::class);
    }

    public function hasQuiz(): bool
    {
        if ($this->quiz_id === null) {
            return false;
        }

        if ($this->quiz->questions()->count() === 0) {
            return false;
        }

        return true;
    }
}
