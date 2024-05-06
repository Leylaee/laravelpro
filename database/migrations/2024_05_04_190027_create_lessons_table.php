<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('lessons', function (Blueprint $table) {
            $table->id();
            $table->string('category');
            $table->string('description');
            $table->integer('max_participants')->default(20);
            $table->integer('current_participants')->default(0);
            $table->time('time');
            $table->date('startdate');
            $table->date('enddate');
            $table->integer('day_of_week');
            $table->foreignId('user_id');
            $table->enum('status', ['available', 'full'])->default('available');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lessons');
    }
};