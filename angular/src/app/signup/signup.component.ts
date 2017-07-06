import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgForm } from "@angular/forms";
import {Router} from '@angular/router'
import { AuthService } from '../auth.service';
import { ValidateService } from '../validate.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers:[AuthService],
})
export class SignupComponent implements OnInit {
  name: String;
  email: String;
  password: String;

  constructor(private validateService: ValidateService,
  	          private authService: AuthService, 
  	          private flashMessage: FlashMessagesService,
  	          private router: Router) { }

  ngOnInit() {
  }

  onSignup(form: NgForm){
      const user = {
        name: form.value.name,
        email: form.value.email,
        password: form.value.password
      }

  	  //Required Fields
  	  if(!this.validateService.validateRegister(user)){
  	  	this.flashMessage.show('Please fill in all fields', 
  	  		{cssClass:'alert-danger', timeout:3000});
  	  	return false;
  	  }

      this.authService.signup(user)
      .subscribe(res => {
      	this.flashMessage.show('You are now registered', 
  			{cssClass:'alert-success', timeout:3000});
  		this.router.navigate(['/home']);
  	});   
  }
}
