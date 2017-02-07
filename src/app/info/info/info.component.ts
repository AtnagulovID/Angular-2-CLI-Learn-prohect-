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
	editingData: boolean[] = [];

	
    constructor(private authenticationService: AuthenticationService,
				private affairsService: AffairsService,
				private alertService: AlertService
				)
	{
    }

    ngOnInit() {
        this.loadAllAffairs();		
    }

	loadEdit(){	
		for (var affair of this.affairs){ 
			this.editingData[affair.id] = false;
		};
	}	

    private loadAllAffairs() {
        this.affairsService.getAll()
									.subscribe( 
												affairs => { this.affairs = affairs;
															 this.loadEdit();
															}
											  );
    }

    deleteAffairs(affair: Affairs) {
        this.affairsService.delete(affair.id)
            .subscribe(
                data => {
					var index = this.affairs.indexOf(affair);
					this.affairs.splice(index, 1); 
                },
                error => {
                    this.alertService.error(error);
                });
    }

	editAffairs(affair: Affairs)
	{
		this.editingData[affair.id] = true;
	}

	cancelAffairs(id: number)
	{
		this.editingData[id] = false;
	}
	
    updateAffairs(affair: Affairs) {
        this.affairsService.update(affair)
            .subscribe(
                affair => {					
					this.editingData[affair.id] = false;
                },
                error => {
                    this.alertService.error(error);
                });
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
