import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services/index';
import { User } from '../../_models/index';
import { UserService } from '../_services/index';
import { AlertService } from '../../_alert/index';


@Component({
  selector: 'home-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  public editUser: User;

    constructor(private authenticationService: AuthenticationService,
				private userService: UserService,
				private alertService: AlertService
				) {
        this.currentUser = this.authenticationService.getCurrentUser();
		this.userService.getAuthUser()
			.subscribe(
				user => {
					this.editUser = user;
					this.editUser.password = '';
				},
				error => {
					this.alertService.error(error);
				});
    }

  ngOnInit() {
  }

  save() {
	this.userService.update(this.editUser)
		.subscribe(
			user => {
				this.userService.getAuthUser().subscribe(user => { this.editUser = user; });
				this.alertService.success('Success edit');
			},
			error => {
				this.alertService.error(error);
			});
}

}
