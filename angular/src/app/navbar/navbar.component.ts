import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  token: any;
  registered: Boolean;
  unregistered: Boolean;
  constructor(private authService: AuthService,
  	          private flashMessage: FlashMessagesService,
  	          private router: Router) { }

  ngOnInit() {
  }

  onLogoutClick(){
     this.authService.logout();
     this.flashMessage.show('You are logged out', 
  			{cssClass:'alert-success', timeout:3000});
     this.router.navigate(['/']);
     return false;
  }

}
