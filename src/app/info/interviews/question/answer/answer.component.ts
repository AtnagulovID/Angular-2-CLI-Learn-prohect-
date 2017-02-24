import { Component, OnInit, Input  } from '@angular/core';
import { AnswerService } from '../../../_services/index';
import { Answer } from '../../../../_models/index';
import { AlertService } from '../../../../_alert/index';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
    @Input('interview') QuestionID: number;
    newAnswer: Answer = new Answer();
    answers: Answer[] = [];
	  editingData: boolean[] = [];

	
    constructor(private answersService: AnswerService,
				        private alertService: AlertService
				       )
	  {
    }

    ngOnInit() {
        this.loadAllAnswers();		
    }

	loadEdit(){	
		for (var answer of this.answers){ 
			this.editingData[answer.id] = false;
		};
	}	

    private loadAllAnswers() {
        this.answersService.getAll(this.QuestionID)
									.subscribe( 
												answers => { 
                               this.answers = answers;
															 this.loadEdit();
															}
											  );
    }

    deleteAnswers(answer: Answer) {
        this.answersService.delete(answer.id)
            .subscribe(
                data => {
					var index = this.answers.indexOf(answer);
					this.answers.splice(index, 1); 
                },
                error => {
                    this.alertService.error(error);
                });
    }

	editAnswers(answer: Answer)
	{
		this.editingData[answer.id] = true;
	}

	cancelAnswers(id: number)
	{
		this.editingData[id] = false;
	}
	
    updateAnswers(answer: Answer) {
        this.answersService.update(answer)
            .subscribe(
                answer => {					
					this.editingData[answer.id] = false;
                },
                error => {
                    this.alertService.error(error);
                });
    }

    create() {      
        this.newAnswer.question = this.QuestionID; 
        this.answersService.create(this.newAnswer)
            .subscribe(
                data => {
					        this.loadAllAnswers();
                },
                error => {
                    this.alertService.error(error);
                });
        this.newAnswer.name = '';
    }


}
