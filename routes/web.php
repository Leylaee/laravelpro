<?php

use App\Models\Lesson;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\EnrollmentController;
use App\Http\Controllers\UserController;
use App\Models\Enrollment;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::post('/',[HomeController::class, 'send'])->middleware('guest');



Route::get('/enrollment', [EnrollmentController::class, 'index'])->name('enrollment.index')->middleware('auth');
Route::post('/enrollment', [EnrollmentController::class, 'store'])->name('enrollment.store')->middleware('auth');
Route::get('/enrollment/show', [EnrollmentController::class, 'show'])->name('enrollment.show')->middleware('auth');
Route::put('/enrollment/{enrollment}/status', [EnrollmentController::class, 'updateStatus'])->name('enrollment.updateStatus')->middleware('auth');

Route::delete('/user/{userId}/unsubscribe', [UserController::class, 'unsubscribe']);

Route::get('/profile', [ProfileController::class, 'show'])->name('profile')->middleware('auth');

Route::get('/lessons', [LessonController::class, 'index'])->name('lessons.index')->middleware('auth');
Route::get('/lessons/create', [LessonController::class, 'create'])->name('lessons.create')->middleware('auth');
Route::post('/lessons', [LessonController::class, 'store'])->name('lessons.store')->middleware('auth');
Route::get('/lessons/{lesson}/edit', [LessonController::class, 'edit'])->name('lessons.edit')->middleware('auth');
Route::put('/lessons/{lesson}', [LessonController::class, 'update'])->name('lessons.update')->middleware('auth');
Route::delete('/lessons/{lesson}', [LessonController::class, 'destroy'])->name('lessons.destroy')->middleware('auth');

Route::get('/login', [AuthController::class, 'login'])->name('login.get');
Route::post('/login', [AuthController::class, 'handleLogin'])->name('login.post')->middleware('guest');
Route::get('/register', [AuthController::class, 'register'])->name('register.get')->middleware('guest');
Route::post('/register', [AuthController::class, 'handleRegister'])->name('register.post')->middleware('guest');
Route::get('/logout', [AuthController::class, 'logout'])->middleware('auth');