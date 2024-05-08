<?php

use App\Models\Lesson;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\EnrollmentController;
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

Route::get('/', [HomeController::class, 'index'])->name('home')->middleware('guest');



Route::get('/enrollment', [EnrollmentController::class, 'index'])->name('enrollment.index')->middleware('auth');
Route::post('/enrollment', [EnrollmentController::class, 'store'])->name('enrollment.store')->middleware('auth');
Route::get('/enrollment/show', [EnrollmentController::class, 'show'])->name('enrollment.show')->middleware('admin');
Route::put('/enrollment/{enrollment}/status', [EnrollmentController::class, 'updateStatus'])->name('enrollment.updateStatus')->middleware('admin');


Route::get('/profile', [ProfileController::class, 'show'])->name('profile')->middleware('auth');

Route::get('/lessons', [LessonController::class, 'index'])->name('lessons.index')->middleware('admin');
Route::get('/lessons/create', [LessonController::class, 'create'])->name('lessons.create')->middleware('admin');
Route::post('/lessons', [LessonController::class, 'store'])->name('lessons.store')->middleware('admin');
Route::get('/lessons/{lesson}/edit', [LessonController::class, 'edit'])->name('lessons.edit')->middleware('admin');
Route::put('/lessons/{lesson}', [LessonController::class, 'update'])->name('lessons.update')->middleware('admin');
Route::delete('/lessons/{lesson}', [LessonController::class, 'destroy'])->name('lessons.destroy')->middleware('admin');


Route::get('/login', [AuthController::class, 'login'])->name('login.get')->middleware('guest');
Route::post('/login', [AuthController::class, 'handleLogin'])->name('login.post')->middleware('guest');
Route::get('/register', [AuthController::class, 'register'])->name('register.get')->middleware('guest');
Route::post('/register', [AuthController::class, 'handleRegister'])->name('register.post')->middleware('guest');