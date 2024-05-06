<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Lesson;
use Illuminate\Http\Request;

class LessonController extends Controller
{
    public function index()
    {
        $lessons = Lesson::all();
        return Inertia::render('Lessons/Index', ['lessons' => $lessons]);
    }

    public function create()
    {
        $users = User::where('role', 'docent')->get();
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
            'user_id' => 'required|exists:users,id',
        ]);

        $lesson = new Lesson();
        $lesson->category = $request->category;
        $lesson->description = $request->description;
        $lesson->starttime = $request->starttime;
        $lesson->endtime = $request->endtime;
        $lesson->startdate = $request->startdate;
        $lesson->enddate = $request->enddate;
        $lesson->day_of_week = $request->day_of_week;
        $lesson->user_id = $request->user_id;
        $lesson->save();
        
        return redirect()->intended(route('lessons.index', ['lesson' => $lesson]));

            
    }

    public function edit(Lesson $lesson){
        return Inertia::render('Lessons/Edit', ['lesson' => $lesson]);
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
            'user_id' => 'required|exists:users,id',
        ]);

        $lesson->category = $request->category;
        $lesson->description = $request->description;
        $lesson->starttime = $request->starttime;
        $lesson->endtime = $request->endtime;
        $lesson->startdate = $request->startdate;
        $lesson->enddate = $request->enddate;
        $lesson->day_of_week = $request->day_of_week;
        $lesson->user_id = $request->user_id;
        $lesson->save();
        
        return redirect()->intended(route('lessons.index', ['lesson' => $lesson]));
    
    }

    public function destroy(Lesson $lesson)
    {
        $lesson->delete();
        return redirect()->back();
    }
}