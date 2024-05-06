<?php

namespace App\Events;

use App\Models\User;
use App\Models\Lesson;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class UserEnrolled
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public User $user;
    public Lesson $lesson;
    
    public function __construct(User $user, Lesson $lesson)
    {
        $this->user = $user;
        $this->lesson = $lesson;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new PrivateChannel('channel-name'),
        ];
    }
}