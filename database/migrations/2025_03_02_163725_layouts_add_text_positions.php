<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('layouts', function (Blueprint $table) {
            $table->unsignedInteger('date_position_top')->default(0);
            $table->unsignedInteger('date_position_left')->nullable();
            $table->unsignedInteger('date_font_size')->default(12);

            $table->unsignedInteger('name_position_top')->default(0);
            $table->unsignedInteger('name_position_left')->nullable();
            $table->unsignedInteger('name_font_size')->default(16);

            $table->unsignedInteger('title_position_top')->default(0);
            $table->unsignedInteger('title_position_left')->nullable();
            $table->unsignedInteger('title_font_size')->default(12);

            $table->unsignedInteger('number_position_top')->default(0);
            $table->unsignedInteger('number_position_left')->nullable();
            $table->unsignedInteger('number_font_size')->default(12);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('layouts', function (Blueprint $table) {
            $table->dropColumn([
                'date_position_top',
                'date_position_left',
                'date_font_size',

                'name_position_top',
                'name_position_left',
                'name_font_size',

                'title_position_top',
                'title_position_left',
                'title_font_size',

                'number_position_top',
                'number_position_left',
                'number_font_size',
            ]);
        });
    }
};
