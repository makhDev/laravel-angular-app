<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Industry;

class IndustryController extends Controller
{

	public function postIndustry(Request $request)
	 {
	   //$user = JWTAuth::parseToken()->toUser();	
	   $industry = new Industry();
	   $industry->industry = $request->input('industry');
	   $industry->description = $request->input('description');
	   $industry->save();
	   return response()->json(['industry' => $industry], 201);	
	 } 

	 public function getIndustries()
	 {
	 	$industries = Industry::all();
	 	$response = [
	      'industries' => $industries
	 	];
	 	return response()->json($response, 200);
	 }  

	 public function putIndustry(Request $request, $id)
	 {
	 	$industry = Industry::findOrFail($id);
	 	if(!$industry){
	 		return response()->json(['message' => 'Docoument not found'], 404);
	 	}
	 	$industry->industry = $request->input('industry');
	 	$industry->description = $request->input('description');
	 	$industry->save();
	 	return response()->json(['industry' => $industry], 200);
	 } 

	 public function deleteIndustry($id)
	 {
	 	$industry = Industry::findOrFail($id);
	 	$industry->delete();
	 	return response()->json(['message' => 'Industry deleted'], 200);
	 }
}
