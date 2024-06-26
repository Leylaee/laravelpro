<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Lesson;
use App\Models\Enrollment;
use App\Events\UserEnrolled;
use App\Mail\EnrollmentApproval;
use App\Mail\EnrollmentUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class EnrollmentController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $lessons = Lesson::all();
        return Inertia::render('Enrollment/Index', ['lessons' => $lessons, 'user' => $user]);
    }

    public function show(){
        if(Auth::user()->isAdmin()) {
          $enrollments = Enrollment::all();
            return Inertia::render('Enrollment/Show' , ['enrollments' => $enrollments]);  
        } else{ 
            return abort(403);
        }
    }
    
    public function store(Request $request){
        
        $request->validate([
        'category' => 'required',
                'registration_for' => 'required',
                'name' => 'required',
                'birthdate' => 'required',
                'email' => 'required',
                'category' => 'required',
            ]);
    
            $enrollment = new Enrollment();
            $enrollment->registration_for = $request->registration_for;
            $enrollment->name = $request->name;
            $enrollment->birthdate = $request->birthdate;
            $enrollment->tel = $request->tel;
            $enrollment->email = $request->email;
            $enrollment->category = $request->category;
            $enrollment->description = $request->description;
            $enrollment->user_id = auth()->user()->id;
            $enrollment->save();
            
            Mail::to($request->email)
            ->send(new EnrollmentUser($request->only(['name'])));

            Mail::to('elmasleyla07@gmail.com')
            ->send(new EnrollmentApproval($request->only(['name'])));
            
            return redirect()->intended(route('home', ['enrollment' => $enrollment]))->with('message','Uw inschrijving wordt behandeld');            
        }
        
        public function updateStatus(Request $request, Enrollment $enrollment)
        {
            $enrollment->status = $request->status;
            $enrollment->save(); 

            return redirect()->back()->with('success', 'Status is bijgewerkt');
        }

        
     }