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
        Schema::create('enrollments', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('tel');
            $table->date('birthdate');
            $table->string('email')->unique();
            $table->string('category');
            $table->string('description');
            $table->enum('registration_for', ['self' , 'other'])->default('self');    
            $table->enum('status', ['Afgehandeld' , 'In afwachting'])->default('In afwachting');            
            $table->foreignId('user_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('enrollments');
    }
};