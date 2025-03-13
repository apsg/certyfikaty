<?php

use App\Domains\Cerificates\Html\Api\CertificatesController;
use App\Http\Middleware\AuthorizeApiRequestMiddleware;
use Illuminate\Support\Facades\Route;

Route::prefix('/certificates')
    ->name('certificates.')
    ->middleware(AuthorizeApiRequestMiddleware::class)
    ->group(function () {
        Route::get('/', [CertificatesController::class, 'search'])->name('search');
    });
