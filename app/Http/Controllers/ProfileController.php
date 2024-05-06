<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Lesson;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    public function show()
    {
        $user = Auth::user();
        
        $lessons = $user->lessons;
      
        return Inertia::render('Profile/Show', ['user' => $user, 'lessons' => $lessons]);
    }
}