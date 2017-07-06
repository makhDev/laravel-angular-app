<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;
use App\User;

class UserController extends Controller
{
   public function signup(Request $request)
   {   
        $this->validate($request, [
                'name' => 'required',
                'email' => 'required|email|unique:users',
                'password' => 'required'
        ]);
        
        $user = new User();
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = bcrypt($request->input('password'));
        $user->save();

        return response()->json([
             'message' => 'Successfully Created User!'
        ],201);
    }

    public function signin(Request $request)
    {
       $this->validate($request, [
                  'email' => 'required|email',
                  'password' => 'required'
       ]);

        $credentials = $request->only('email','password');
              try {
                 if(!$token = JWTAuth::attempt($credentials)){
                     return response()->json([
                        'error' => 'Invalid Credentials!'
                     ],401);
                 }
              } catch(JWTException $e) {
                 return response()->json([
                    'error' => 'Could not create token!'  
                 ],500);
              }
              return response()->json([
                 'token' => $token
              ],200);
    }
}
