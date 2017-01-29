import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/index';
import { AlertService } from '../_alert/index';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  model: any = {};
  loading = false;

	constructor(
		private router: Router,
		private authenticationService: AuthenticationService,
		private alertService: AlertService
		) {
	}

    register() {
        this.loading = true;
        this.authenticationService.create(this.model)
            .subscribe(
                data => {
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

}
