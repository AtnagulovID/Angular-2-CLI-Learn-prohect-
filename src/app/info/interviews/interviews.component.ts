import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services/index';
import { InterviewService } from '../_services/index';
import { Interview } from '../../_models/index';
import { AlertService } from '../../_alert/index';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
})
export class InterviewsComponent implements OnInit {
    newInterview: Interview = new Interview();
    interviews: Interview[] = [];
	  editingData: boolean[] = [];

	
    constructor(private authenticationService: AuthenticationService,
				private interviewsService: InterviewService,
				private alertService: AlertService
				)
	  {
    }

    ngOnInit() {
        this.loadAllInterviews();		
    }

	loadEdit(){	
		for (var interview of this.interviews){ 
			this.editingData[interview.id] = false;
		};
	}	

    private loadAllInterviews() {
        this.interviewsService.getAll()
									.subscribe( 
												interviews => { this.interviews = interviews;
															 this.loadEdit();
															}
											  );
    }

    deleteInterviews(interview: Interview) {
        this.interviewsService.delete(interview.id)
            .subscribe(
                data => {
					var index = this.interviews.indexOf(interview);
					this.interviews.splice(index, 1); 
                },
                error => {
                    this.alertService.error(error);
                });
    }

	editInterviews(interview: Interview)
	{
		this.editingData[interview.id] = true;
	}

	cancelInterviews(id: number)
	{
		this.editingData[id] = false;
	}
	
    updateInterviews(interview: Interview) {
        this.interviewsService.update(interview)
            .subscribe(
                interview => {					
					this.editingData[interview.id] = false;
                },
                error => {
                    this.alertService.error(error);
                });
    }

    create() {
        this.interviewsService.create(this.newInterview)
            .subscribe(
                data => {
					this.loadAllInterviews();
                },
                error => {
                    this.alertService.error(error);
                });
    }

}
