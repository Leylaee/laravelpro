<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Lesson;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LessonController extends Controller
{
    public function index()
    {
        $lessons = Lesson::with('users')->get();
    

      /*  if (Auth::user()->role !== 'admin') {
            $lessons = $lessons->filter(function ($lesson) {
                return $lesson->users->contains(Auth::user());
            });
        }*/
       
        return Inertia::render('Lessons/Index', ['lessons' => $lessons]);
    }

    public function create()
    {
        $users = User::where('role', 'docent')
                      ->orWhere('role', 'leerling')
                      ->get();
        return Inertia::render('Lessons/Create', ['users' => $users]);
    }

    public function store(Request $request)
    {

        $request->validate([
            'category' => 'required',
            'description' => 'required',
            'starttime' => 'required',
            'endtime' => 'required',
            'startdate' => 'required',
            'enddate' => 'required',
            'day_of_week' => 'required|integer|between:1,7',
            
        ]);

        $lesson = new Lesson();
        $lesson->category = $request->category;
        $lesson->description = $request->description;
        $lesson->starttime = $request->starttime;
        $lesson->endtime = $request->endtime;
        $lesson->startdate = $request->startdate;
        $lesson->enddate = $request->enddate;
        $lesson->day_of_week = $request->day_of_week;
        $lesson->save();
        
     
        if ($request->has('user_ids')) {
            $lesson->users()->attach($request->user_ids);
        }
        
        return redirect()->intended(route('lessons.index', ['lesson' => $lesson]));

            
    }

    public function edit(Lesson $lesson){
        
        $users = User::where('role', '!=' ,'admin')->get();
        return Inertia::render('Lessons/Edit', ['lesson' => $lesson, 'users' => $users]);
    }
    
    public function update(Request $request, Lesson $lesson)
    { 
        $request->validate([
            'category' => 'required',
            'description' => 'required',
            'starttime' => 'required',
            'endtime' => 'required',
            'startdate' => 'required',
            'enddate' => 'required',
            'day_of_week' => 'required|integer|between:1,7',
        ]);

        $lesson->category = $request->category;
        $lesson->description = $request->description;
        $lesson->starttime = $request->starttime;
        $lesson->endtime = $request->endtime;
        $lesson->startdate = $request->startdate;
        $lesson->enddate = $request->enddate;
        $lesson->day_of_week = $request->day_of_week;
        
        $lesson->save();

        if ($request->has('user_ids')) {
            $lesson->users()->sync($request->user_ids);
        }
        
        return redirect()->intended(route('lessons.index', ['lesson' => $lesson]));
    
    }

    public function destroy(Lesson $lesson)
    {
        $lesson->users()->detach();
        $lesson->delete();
        return redirect()->back();
    }
}