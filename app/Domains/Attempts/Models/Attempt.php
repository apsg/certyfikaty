<?php
namespace App\Domains\Attempts\Models;

use App\Domains\Cerificates\Models\Certificate;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int              id
 * @property string           email
 * @property string           name
 * @property int              certificate_id
 * @property bool             is_passed
 * @property int              score
 * @property array            answers
 * @property Carbon|null      finished_at
 * @property Carbon           created_at
 * @property Carbon           updated_at
 * @property string           number
 *
 * @property-read Certificate $certificate
 *
 * @method static Builder passed()
 * @method static Builder forEmail(string $email)
 */
class Attempt extends Model
{
    protected $fillable = [
        'email',
        'name',
        'certificate_id',
        'is_passed',
        'score',
        'answers',
        'finished_at',
        'number',
    ];

    protected $casts = [
        'is_passed'   => 'boolean',
        'answers'     => 'array',
        'finished_at' => 'datetime',
    ];

    protected $hidden = [
        'answers',
    ];

    public function certificate(): BelongsTo
    {
        return $this->belongsTo(Certificate::class);
    }

    public function isFinished(): bool
    {
        return $this->finished_at !== null;
    }

    public function scopePassed(Builder $builder): Builder
    {
        return $builder->where('is_passed', true);
    }

    public function scopeForEmail(Builder $builder, string $email): Builder
    {
        return $builder->where('email', $email);
    }
}
