import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private authService:AuthService, private router:Router){

	}

	canActivate(){ 
       if(this.authService.loggedIn()){
       	  return true;
       } else {
       	  this.router.navigate(['/signin']);
       	  return false;
       }
	}

}
