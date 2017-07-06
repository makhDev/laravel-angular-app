import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  providers:[AuthService],
})
export class SigninComponent implements OnInit {
  username: String;
  password: String;

  constructor(private authService: AuthService,
  	          private flashMessage: FlashMessagesService,
  	          private router: Router) { }

  ngOnInit() {
  }

  onSignin(form: NgForm){
  	  const user = {
  	  	email: form.value.email,
  	  	password: form.value.password
  	  }

      this.authService.signin(user).subscribe(data => {
          if(data){
            this.authService.storeUserData(data.token);
  		      this.flashMessage.show('You are logged in', 
  		   	    {cssClass:'alert-success', timeout:3000});
  		      this.router.navigate(['/industries']);
  	      } 
          else 
          {
  		      this.flashMessage.show('Invalid data', 
  			    {cssClass:'alert-danger', timeout:3000});
  		      this.router.navigate(['/home']);
  		      console.log(data);
  	      }
      });
  }
}
