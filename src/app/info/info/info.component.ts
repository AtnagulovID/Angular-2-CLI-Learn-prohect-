import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services/index';
import { AffairsService } from '../_services/index';
import { Affairs } from '../../_models/index';
import { AlertService } from '../../_alert/index';


@Component({
  selector: 'home-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
    newAffair: Affairs = new Affairs();
    affairs: Affairs[] = [];

    constructor(private authenticationService: AuthenticationService,
				private affairsService: AffairsService,
				private alertService: AlertService
				)
	{
    }

    ngOnInit() {
        this.loadAllAffairs();
    }

    deleteAffairs(id: number) {
        this.affairsService.delete(id)
            .subscribe(
                data => {
					this.loadAllAffairs();
                },
                error => {
                    this.alertService.error(error);
                });
    }

    private loadAllAffairs() {
        this.affairsService.getAll().subscribe(affairs => { this.affairs = affairs; });
    }

    create() {
        this.affairsService.create(this.newAffair)
            .subscribe(
                data => {
					this.loadAllAffairs();
                },
                error => {
                    this.alertService.error(error);
                });
    }

}
