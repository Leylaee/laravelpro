<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Mail\Register;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

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
            ]))
        {
            return redirect()->intended(route('profile'));
        }

        return back()->withErrors([
            'identity'=> "We couldn't login with these credentials.", 
        ]);
    }
    
    public function register()
    {
        return Inertia::render('Auth/Register');
    }

    public function handleRegister(Request $request) 
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed'
        ]);
        
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();


        Mail::to($request->email)
        ->send(new Register($request->only(['name'])));
        
        return Inertia::render('Auth/Login');
    }
    
}