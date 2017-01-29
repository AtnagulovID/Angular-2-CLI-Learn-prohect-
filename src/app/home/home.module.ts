import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { UserService } from './_services/index';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
	HomeRoutingModule,
	SharedModule,
    FormsModule
  ],
  providers: [
		UserService
  ] 
})
export class HomeModule { }
