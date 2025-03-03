<?php
namespace App\Domains\Cerificates\Models\Policies;

use App\Domains\Cerificates\Models\Certificate;
use App\Models\User;

class CertificatePolicy
{
    public function view(User $user, Certificate $certificate): bool
    {
        return $certificate->isOwnedBy($user);
    }

    public function create(User $user): bool
    {
        return true;
    }

    public function update(User $user, Certificate $certificate): bool
    {
        return $certificate->isOwnedBy($user);
    }

    public function delete(User $user, Certificate $certificate): bool
    {
        return $certificate->isOwnedBy($user);
    }
}
