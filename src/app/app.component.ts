import { Component } from '@angular/core';
import {SharedModule} from "./shared/shared.module";
import { AuthenticationService } from './_services/index'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(authenticationService: AuthenticationService				
				)
	{
	}
}
