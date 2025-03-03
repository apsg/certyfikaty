<?php

use App\Domains\Cerificates\Html\CertificatesController;
use App\Domains\Cerificates\Html\LayoutsController;
use App\Domains\Quizzes\Html\OptionsController;
use App\Domains\Quizzes\Html\QuestionsController;
use App\Domains\Quizzes\Html\QuizzesController;
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
        Route::delete('/{quiz}', QuizzesController::class . '@destroy')->name('destroy');
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

Route::prefix('/options')
    ->name('options.')
    ->group(function () {
        Route::post('/{option}', OptionsController::class . '@update')->name('update');
        Route::get('/{option}/destroy', OptionsController::class . '@destroy')->name('destroy');
        Route::get('/{question}/create', OptionsController::class . '@create')->name('create');
    });

Route::prefix('/layouts')
    ->name('layouts.')
    ->group(function () {
        Route::get('/', LayoutsController::class . '@index')->name('index');
        Route::post('/', LayoutsController::class . '@store')->name('store');
        Route::get('/{layout}', LayoutsController::class . '@edit')->name('edit');
        Route::get('/{layout}/destroy', LayoutsController::class . '@destroy')->name('destroy');
        Route::post('/{layout}', LayoutsController::class . '@update')->name('update');
        Route::get('/{layout}/test', LayoutsController::class . '@test')->name('test');
    });

Route::prefix('/certificates')
    ->name('certificates.')
    ->group(function () {
        Route::get('/', CertificatesController::class . '@index')->name('index');
        Route::get('/create', CertificatesController::class . '@create')->name('create');
        Route::post('/', CertificatesController::class . '@store')->name('store');
        Route::get('/{certificate}', CertificatesController::class . '@edit')->name('edit');
        Route::post('/{certificate}', CertificatesController::class . '@update')->name('update');
        Route::get('/{certificate}/destroy', CertificatesController::class . '@destroy')->name('destroy');
    });
