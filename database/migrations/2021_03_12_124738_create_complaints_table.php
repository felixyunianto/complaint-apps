<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Carbon\Carbon;

class CreateComplaintsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('complaints', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('complaint_category_id')->unsigned();
            $table->text('complaint_content');
            $table->bigInteger('user_id')->unsigned();
            $table->enum('status', ['Waiting', 'Approved', 'Decline'])->default('Waiting');
            $table->text('complaint_image')->nullable();
            $table->timestamps();

            $table->foreign('complaint_category_id')->references('id')->on('complaint_categories')->onDelete('CASCADE');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('complaints');
    }
}
