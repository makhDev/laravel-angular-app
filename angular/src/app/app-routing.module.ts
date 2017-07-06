import { NgModule } from '@angular/core';

import {HomeComponent} from './home/home.component';
import { Routes, RouterModule } from '@angular/router';

import { IndustriesComponent } from './industries/industries.component';
import { CompaniesComponent } from './companies/companies.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
   {path: '', redirectTo: '/home', pathMatch: 'full'},
   {path: 'home', component: HomeComponent},
   {path: 'industries', component: IndustriesComponent, canActivate:[AuthGuard]},
   {path: 'companies', component: CompaniesComponent, canActivate:[AuthGuard]},
   {path: 'signin', component: SigninComponent},
   {path: 'signup', component: SignupComponent},
   {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
