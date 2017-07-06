import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;

  constructor(private http: Http) { }

  signup(user){
  	let headers = new Headers({'Content-Type': 'application/json'});
  	return this.http.post('http://localhost:8000/api/user/signup',
  		                   user, {headers:headers})
  	  .map(res => res.json());
  }

  signin(user){
  	let headers = new Headers({'Content-Type': 'application/json'});
  	return this.http.post('http://localhost:8000/api/user/signin',
  		                   user, {headers:headers})
  	  .map(res => res.json());

  }

  getProfile(){
  	let headers = new Headers();
  	this.loadToken();
  	headers.append('Authorization', this.authToken);
  	headers.append('Content-Type', 'application/json');
  	return this.http.get('http://localhost:8000/api/users/profile', {headers:headers})//?token=authToken
  	.map(res => res.json());
  } 

  storeUserData(token){
     localStorage.setItem('id_token', token);
     this.authToken = token;
  }

  loadToken(){
  	return localStorage.getItem('id_token');
  }
  
  loggedIn(){
  	return tokenNotExpired('id_token');
  }

  logout(){
  	this.authToken = null;
  	localStorage.clear();
  }

  addTask(task){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/api/users/tasks',
                         task, {headers:headers})
      .map(res => res.json());
  }
}
