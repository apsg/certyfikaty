<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('certificates', function (Blueprint $table) {
            $table->string('mailerlite_group_id')->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('certificates', function (Blueprint $table) {
            $table->dropColumn('mailerlite_group_id');
        });
    }
};
