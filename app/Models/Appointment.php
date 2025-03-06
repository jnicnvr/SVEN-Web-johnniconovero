<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    protected $table = 'appointments';
    protected $fillable = ['user_id','pet_id', 'name', 'pet_name', 'selected_date', 'time_of_day','select_time','status','notes'];
}
