<?php

use Illuminate\Support\Facades\Route;
Route::get('/admin', [AdminController::class, 'login'])->name('admin.login');