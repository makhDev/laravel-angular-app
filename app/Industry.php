<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Industry extends Model
{
    protected $fillable = ['industry', 'description'];

    public function companies(){
    	return $this->hasMany('App\Company');
    }
}
