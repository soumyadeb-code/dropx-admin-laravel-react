<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->string('time');
            $table->string('desc');
            $table->boolean('is_sale')->default(false);
            $table->string('border_color')->default('border-primary');
            $table->boolean('is_last_item')->default(false);
            $table->timestamps();
        });

        Schema::create('product_performances', function (Blueprint $table) {
            $table->id();
            $table->string('username');
            $table->string('designation');
            $table->string('project');
            $table->string('priority');
            $table->string('color')->default('primary');
            $table->string('bgcolor')->default('bg-primary text-white');
            $table->string('budget');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('product_performances');
        Schema::dropIfExists('transactions');
    }
};