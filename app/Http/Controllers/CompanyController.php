<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Company;
use App\Industry;

class CompanyController extends Controller
{

	public function postCompany(Request $request)
	 {
	   //$user = JWTAuth::parseToken()->toUser();	
	   $company = new Company();
	   $company->company = $request->input('company');
	   $company->headquarters = $request->input('headquarters');
	   $company->industry_id = $request->input('industry_id');
	   $company->save();
	   return response()->json(['company' => $company], 201);	
	 } 

	 public function getCompanies()
	 {
	 	$companies = Company::all();
	 	$response = [
	      'companies' => $companies,
	 	];
	 	return response()->json($response, 200);
	 } 

	 public function putCompany(Request $request, $id)
	 {
	 	$company = Company::findOrFail($id);
	 	if(!$company){
	 		return response()->json(['message' => 'Docoument not found'], 404);
	 	}
	 	$company->company = $request->input('company');
	    $company->headquarters = $request->input('headquarters');
	    $company->industry_id = $request->input('industry_id');
	    $company->save();
	 	return response()->json(['company' => $company], 200);
	 } 

	 public function deleteCompany($id)
	 {
	 	$company = Company::findOrFail($id);
	 	$company->delete();
	 	return response()->json(['message' => 'Company deleted'], 200);
	 }
}
