<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $fillable = ['company', 'headquarters', 'industry_id'];

    public function industry(){
    	return $this->belongsTo('App\Industry');
    }
}
