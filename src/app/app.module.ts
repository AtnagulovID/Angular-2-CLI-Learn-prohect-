import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { HomeModule } from "./home/home.module";
import { InfoModule } from "./info/info.module";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/index';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainMenuComponent,
    MainMenuComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
	HomeModule,
	SharedModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
