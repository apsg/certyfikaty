<?php
namespace App\Domains\Attempts\Models;

use App\Models\User;

class AttemptPolicy
{
    public function viewAny(User $user): bool
    {
        return false;
    }

    public function view(User $user, Attempt $attempt): bool
    {
        return $attempt->certificate->isOwnedBy($user);
    }

    public function create(User $user): bool
    {
        return true;
    }

    public function update(User $user, Attempt $attempt): bool
    {
        return $attempt->certificate->isOwnedBy($user);
    }

    public function delete(User $user, Attempt $attempt): bool
    {
        return false;
    }
}
