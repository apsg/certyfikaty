<?php

use App\Domains\Attempts\Html\AttemptsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return \Inertia\Inertia::render('Welcome', []);
});

require __DIR__ . '/auth.php';

Route::get('/q/{quiz:slug}', function () {

})->name('quiz.show');

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
