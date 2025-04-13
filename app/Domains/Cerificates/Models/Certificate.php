<?php
namespace App\Domains\Cerificates\Models;

use App\Domains\Attempts\Models\Attempt;
use App\Domains\Quizzes\Models\Quiz;
use App\HasUserTrait;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

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
 *
 * @property-read string    $title_formatted
 * @property-read string    $title_cleaned
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

    protected $appends = [
        'title_formatted',
        'title_cleaned',
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

    public function getTitleFormattedAttribute(): string
    {
        return Str::replace('\n', '<br />', nl2br($this->title));
    }

    public function getTitleCleanedAttribute(): string
    {
        return Str::replace('\n', '', $this->title);
    }
}
