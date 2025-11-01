<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('offers', function (Blueprint $table) {
            $table->id();
            $table->string('title_en');
            $table->string('title_ar');
            $table->string('slug')->unique();
            $table->text('definition_en')->nullable();
            $table->text('definition_ar')->nullable();
            $table->text('features_en')->nullable();
            $table->text('features_ar')->nullable();
            $table->decimal('price_month', 10, 2)->nullable();
            $table->decimal('price_year', 10, 2)->nullable();
            $table->enum('tier', ['pro','starter','lite','none'])->default('none');
            $table->boolean('active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('offers');
    }
};
