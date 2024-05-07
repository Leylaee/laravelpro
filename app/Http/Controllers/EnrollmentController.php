<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Lesson;
use Illuminate\Http\Request;

class EnrollmentController extends Controller
{
    public function index()
    {
        $lessons = Lesson::all();
        return Inertia::render('Enrollment/Index', ['lessons' => $lessons]);
    }
}