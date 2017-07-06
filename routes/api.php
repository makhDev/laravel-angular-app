<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Industry Controller
Route::post('/industry',[
   'uses' => 'IndustryController@postIndustry',
   'middleware' => 'auth.jwt'
]);

Route::get('/industries',[
   'uses' => 'IndustryController@getIndustries',   
]);

Route::put('/industry/{id}',[
   'uses' => 'IndustryController@putIndustry'
]);

Route::delete('/industry/{id}',[
   'uses' => 'IndustryController@deleteIndustry'
]);

//Company Controller
Route::post('/company',[
   'uses' => 'CompanyController@postCompany'
]);

Route::get('/companies',[
   'uses' => 'CompanyController@getCompanies',   
]);

Route::put('/company/{id}',[
   'uses' => 'CompanyController@putCompany'
]);

Route::delete('/company/{id}',[
   'uses' => 'CompanyController@deleteCompany'
]);

//users
Route::post('/user/signup', [
  'uses' => 'UserController@signup'
]);

Route::post('/user/signin', [
  'uses' => 'UserController@signin'
]);