<?php

use App\Http\Controllers\PermissionController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

//
//Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
//
//Route::resource('/user', UserController::class)->except('create', 'show', 'edit');
//Route::post('/user/destroy-bulk', [UserController::class, 'destroyBulk'])->name('user.destroy-bulk');
//
//Route::resource('/role', RoleController::class)->except('create', 'show', 'edit');
//
//Route::resource('/permission', PermissionController::class)->except('create', 'show', 'edit');
