<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(){
        return Inertia::render('Auth/Login');
    }

    public function handleLogin(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);


        if(Auth::attempt([
            'email' => $request->email,
            'password'=> $request->password
            ])){
            return redirect()->intended(route('/'));
        }

        return back()->withErrors([
            'identity'=> "We couldn't login with these credentials.", 
        ]);
    }
    
    public function register()
    {
        return Inertia::render('Auth/register');
    }
    
}