<?php
namespace App\Domains\Quizzes\Models;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $name
 * @property string $slug
 * @property int $user_id
 * @property Carbon $created_at
 * @property Carbon $updated_at
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
}
