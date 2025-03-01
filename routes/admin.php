<?php

use App\Domains\Quizzes\Html\QuestionsController;
use App\Domains\Quizzes\Html\QuizzesController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\RoleController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');


Route::prefix('/quizzes')
    ->name('quizzes.')
    ->group(function () {
        Route::get('/', QuizzesController::class . '@index')->name('index');
        Route::get('/create', QuizzesController::class . '@create')->name('create');
        Route::get('/{quiz}', QuizzesController::class . '@edit')->name('edit');
        Route::post('/{quiz}', QuizzesController::class . '@update')->name('update');
        Route::get('/{quiz}/add_question', QuizzesController::class . '@addQuestion')->name('add_question');
    });

Route::prefix('/questions')
    ->name('questions.')
    ->group(function () {
        Route::post('/{question}', QuestionsController::class . '@update')->name('update');
        Route::get('/{question}/destroy', QuestionsController::class . '@destroy')->name('destroy');
        Route::get('/{question}/up', QuestionsController::class . '@up')->name('up');
        Route::get('/{question}/down', QuestionsController::class . '@down')->name('down');
    });
