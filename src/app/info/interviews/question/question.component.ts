import { Component, OnInit, Input  } from '@angular/core';
import { QuestionService } from '../../_services/index';
import { Question } from '../../../_models/index';
import { AlertService } from '../../../_alert/index';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
    @Input('interview') interviewID: number;
    newQuestion: Question = new Question();
    questions: Question[] = [];
	  editingData: boolean[] = [];

	
    constructor(private questionsService: QuestionService,
				        private alertService: AlertService
				       )
	  {
    }

    ngOnInit() {
        this.loadAllQuestions();		
    }

	loadEdit(){	
		for (var question of this.questions){ 
			this.editingData[question.id] = false;
		};
	}	

    private loadAllQuestions() {
        this.questionsService.getAll(this.interviewID)
									.subscribe( 
												questions => { 
                               this.questions = questions;
															 this.loadEdit();
															}
											  );
    }

    deleteQuestions(question: Question) {
        this.questionsService.delete(question.id)
            .subscribe(
                data => {
					var index = this.questions.indexOf(question);
					this.questions.splice(index, 1); 
                },
                error => {
                    this.alertService.error(error);
                });
    }

	editQuestions(question: Question)
	{
		this.editingData[question.id] = true;
	}

	cancelQuestions(id: number)
	{
		this.editingData[id] = false;
	}
	
    updateQuestions(question: Question) {
        this.questionsService.update(question)
            .subscribe(
                question => {					
					this.editingData[question.id] = false;
                },
                error => {
                    this.alertService.error(error);
                });
    }

    create() {      
        this.newQuestion.interview = this.interviewID; 
        this.questionsService.create(this.newQuestion)
            .subscribe(
                data => {
					        this.loadAllQuestions();
                },
                error => {
                    this.alertService.error(error);
                });
        this.newQuestion.name = '';
    }


}
