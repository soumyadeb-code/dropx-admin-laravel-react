<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\TicketController;
use Illuminate\Support\Facades\Route;

// Authentication APIs
Route::post('/api/login', [AuthController::class, 'login']);
Route::post('/api/register', [AuthController::class, 'register']);
Route::post('/api/logout', [AuthController::class, 'logout']);
Route::get('/api/me', [AuthController::class, 'me']);
Route::post('/api/profile', [AuthController::class, 'updateProfile']);

// Dashboard APIs
Route::get('/api/dashboard', [DashboardController::class, 'index']);

// Notes APIs
Route::get('/api/notes', [NoteController::class, 'index']);
Route::post('/api/notes', [NoteController::class, 'store']);
Route::put('/api/notes/{id}', [NoteController::class, 'update']);
Route::delete('/api/notes/{id}', [NoteController::class, 'destroy']);

// Tickets APIs
Route::get('/api/tickets', [TicketController::class, 'index']);
Route::post('/api/tickets', [TicketController::class, 'store']);
Route::get('/api/tickets/{id}', [TicketController::class, 'show']);
Route::put('/api/tickets/{id}', [TicketController::class, 'update']);
Route::delete('/api/tickets/{id}', [TicketController::class, 'destroy']);

// Blog APIs
Route::get('/api/blogs', [BlogController::class, 'index']);
Route::get('/api/blogs/{id}', [BlogController::class, 'show']);
Route::post('/api/blogs/{id}/comment', [BlogController::class, 'addComment']);

// React SPA Route
Route::view('/{any?}', 'app')->where('any', '.*');