<?php

namespace App\Listeners;

use App\Models\User;
use App\Events\UserEnrolled;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class LinkEnrollmentToUser
{
    /**
     
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(UserEnrolled $event): void
    {
        $enrollment = $event->enrollment;
        
        $existingUser = User::where('email', $enrollment->email)->first();
        
        if($existingUser) {
            $enrollment->user()->associate($existingUser);
            $enrollment->save();
        }
      
    }
}