<?php

use App\Http\Controllers\OfferController;
use App\Http\Controllers\AdminAuthController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\TeamController;
use Illuminate\Support\Facades\Route;

// --- Public routes ---
Route::get('/offers', [OfferController::class, 'index']); // everyone can see offers
Route::get('/offers/{offer}', [OfferController::class, 'show']); // view single offer
Route::get('/faqs', [FaqController::class, 'index']); // everyone can see FAQs
Route::get('/faqs/{faq}', [FaqController::class, 'show']); // view single FAQ
Route::get('/news', [NewsController::class, 'index']); // everyone can see news
Route::get('/news/{news}', [NewsController::class, 'show']); // view single news article
Route::get('/team', [TeamController::class, 'index']); // Add public team route
Route::get('/team/{team}', [TeamController::class, 'show']); // Add public single team member route
Route::post('/login', [AdminAuthController::class, 'login']);

// --- Protected (admin) routes ---
Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::post('/logout', [AdminAuthController::class, 'logout']);
    Route::get('/admin/dashboard', [AdminAuthController::class, 'dashboard']);
    Route::apiResource('offers', OfferController::class)->except(['index', 'show']);
    Route::apiResource('faqs', FaqController::class)->except(['index', 'show']);
    Route::apiResource('news', NewsController::class)->except(['index', 'show']);
    Route::apiResource('team', TeamController::class)->except(['index', 'show']); // Add protected team routes
});

