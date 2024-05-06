<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Lesson extends Model
{
    protected $fillable = ['category', 'description', 'max_participants', 'current_participants' , 'time', 'startdate' , 'enddate' , 'day_of_week', 'user_id', 'status'];
    
    protected $attributes = [
        'current_participants' => 0,
    ];

    
    public function users(){
        return $this->belongsToMany(User::class,'lesson_user');
    }
}