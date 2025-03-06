<?php

use App\Domains\Attempts\Html\AttemptsController;
use App\Domains\Attempts\Html\ValidateController;
use Illuminate\Support\Facades\Route;

require __DIR__ . '/auth.php';

Route::prefix('/c')
    ->name('attempts.')
    ->group(function () {
        Route::get('/{certificate:slug}', AttemptsController::class . '@show')->name('show');
        Route::post('/{certificate:slug}', AttemptsController::class . '@store')->name('store');
        Route::get('/{certificate:slug}/{attempt:number}', AttemptsController::class . '@showAttempt')
            ->name('showAttempt');
        Route::post('/{certificate:slug}/{attempt:number}', AttemptsController::class . '@finish')->name('finish');
    });

Route::get('/d/{attempt:number}/download', AttemptsController::class . '@download')->name('download');

Route::get('/waliduj', ValidateController::class . '@show')->name('validate.show');
Route::post('/waliduj', ValidateController::class . '@check')->name('validate.check');
