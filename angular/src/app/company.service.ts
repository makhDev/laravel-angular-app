import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import  'rxjs/add/operator/map';
import { Observable } from "rxjs";
import { Company } from './company';

@Injectable()
export class CompanyService {

  private _getUrl = "http://localhost:8000/api/companies";	
  private _postUrl = "http://localhost:8000/api/company";
  private _putUrl = "http://localhost:8000/api/company/";
  private _deleteUrl = "http://localhost:8000/api/company/";

  constructor(private _http: Http) { }

  getCompanies(): Observable<any>{
    return this._http.get(this._getUrl)
       .map((response: Response) => {return response.json().companies});
  }

  addCompany(company: Company): Observable<any>{
  	let header = new Headers({'Content-Type': 'application/json'});
  	return this._http.post(this._postUrl, JSON.stringify(company) ,{headers: header})//;
       .map((response: Response) => {return response.json().company});
  }

  updateCompany(company: Company, id: number){
  	let header = new Headers({'Content-Type': 'application/json'});
  	return this._http.put(this._putUrl + id, JSON.stringify(company) ,{headers: header})
  	    .map((response:Response) => response.json());
  }

  deleteCompany(id: number){
  	return this._http.delete(this._deleteUrl + id)
  	   .map((response: Response) => response.json());
  }

}
