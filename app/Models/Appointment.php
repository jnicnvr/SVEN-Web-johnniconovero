<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    protected $table = 'appointments';
    protected $fillable = ['user_id','pet_id', 'name', 'pet_name', 'selected_day', 'time_of_day','frequency','start_date','status','notes'];
}
