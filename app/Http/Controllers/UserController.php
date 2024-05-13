<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Mail\Unsubscribe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class UserController extends Controller
{
    public function unsubscribe(Request $request)
    {
        $user = Auth::user();
        $lessonId = $request->lessonId;
        
        $user->lessons()->detach($lessonId);
        
        Mail::to($user->email)
        ->send(new Unsubscribe($user));

        
        return redirect()->back();
    }
}