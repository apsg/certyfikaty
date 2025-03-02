<?php
namespace App\Domains\Cerificates\Models\Policies;

use App\Domains\Cerificates\Models\Layout;
use App\Models\User;

class LayoutPolicy
{
    public function view(User $user, Layout $layout): bool
    {
        return $layout->isOwnedBy($user);
    }

    public function create(User $user): bool
    {
        return true;
    }

    public function update(User $user, Layout $layout): bool
    {
        return $layout->isOwnedBy($user);
    }

    public function delete(User $user, Layout $layout): bool
    {
        return $layout->isOwnedBy($user);
    }
}
