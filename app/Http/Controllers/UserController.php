<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function unsubscribe(Request $request)
    {
        $user = Auth::user();
        $lessonId = $request->lessonId;
        
        $user->lessons()->detach($lessonId);
        return redirect()->back();
    }
}