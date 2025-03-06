<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pet extends Model
{
    protected $table = 'pets';
    protected $fillable = ['user_id', 'name', 'species', 'breed', 'dob'];
}
