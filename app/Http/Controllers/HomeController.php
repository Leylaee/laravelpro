<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Mail\ContactMessageSent;
use Illuminate\Support\Facades\Mail;

class HomeController extends Controller
{
    public function index()
    {
       return Inertia::render('Home');
    }
    public function send(Request $request)
    {
      $request->validate([
        'name' => 'required',
        'email' => 'required|email',
        'message' => 'required|min:25'
      ]);
      
      Mail::to('elmasleyla07@gmail.com')
          ->send(new ContactMessageSent($request->only(['name', 'email', 'tel', 'message'])));
      
       return back()->with('status', 'Je bericht is verstuurd.');
    }
}