<?php
namespace App\Domains\Quizzes\Models;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int             $id
 * @property string          $name
 * @property string          $slug
 * @property int             $user_id
 * @property Carbon          $created_at
 * @property Carbon          $updated_at
 *
 * @property-read Question[] $questions
 */
class Quiz extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'slug', 'user_id'];

    public function scopeForUser(Builder $builder, User $user): Builder
    {
        return $builder->where('user_id', $user->id);
    }

    protected static function newFactory(): QuizFactory
    {
        return new QuizFactory();
    }

    public function questions(): HasMany
    {
        return $this
            ->hasMany(Question::class)
            ->orderBy('order');
    }

    public function getMaxOrder(): int
    {
        return $this->questions()->max('order') ?? 0;
    }
}
