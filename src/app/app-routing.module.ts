import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

const routes: Routes = [
  {
    path: '',
	redirectTo: 'home',
	pathMatch: 'full',
	canActivate: [AuthGuard]
  },
  {
	path: 'login',
	component: LoginComponent
  },
  {
	path: 'register',
	component: RegisterComponent
  },
  { 
	path: 'home', 
	loadChildren: './home/home.module#HomeModule',
	canActivate: [AuthGuard]
  },
  { 
	path: 'info', 
	loadChildren: './info/info.module#InfoModule',
	canActivate: [AuthGuard]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
