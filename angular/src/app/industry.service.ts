import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import  'rxjs/add/operator/map';
import { Observable } from "rxjs";
import { Industry } from './industry';
import { AuthService } from './auth.service';

@Injectable()
export class IndustryService {
  private _getUrl = "http://localhost:8000/api/industries";	
  private _postUrl = "http://localhost:8000/api/industry";
  private _putUrl = "http://localhost:8000/api/industry/";
  private _deleteUrl = "http://localhost:8000/api/industry/";

  constructor(private _http: Http,
              private authService: AuthService) { }

  getIndustries(): Observable<any>{
  	return this._http.get(this._getUrl)
  	   .map((response: Response) => {return response.json().industries});
  }

  addIndustry(industry: Industry): Observable<any>{
    let token = this.authService.loadToken();
  	let header = new Headers({'Content-Type': 'application/json'});
  	return this._http.post(this._postUrl + '?token=' + token, JSON.stringify(industry) ,{headers: header})//;
       .map((response: Response) => {return response.json().industry});
  }

  updateIndustry(industry: Industry, id: number){
    let token = this.authService.loadToken();
  	let header = new Headers({'Content-Type': 'application/json'});
  	return this._http.put(this._putUrl + id + '?token=' + token, JSON.stringify(industry) ,{headers: header})
  	    .map((response:Response) => response.json());
  }

  deleteIndustry(id: number){
    let token = this.authService.loadToken();
  	return this._http.delete(this._deleteUrl + id + '?token=' + token)
  	   .map((response: Response) => response.json());
  }

}
