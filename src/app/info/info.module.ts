import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { InfoComponent } from './info/info.component';
import { InfoRoutingModule } from './info-routing.module';
import { AffairsService } from './_services/index';
import { InterviewService } from './_services/index';
import { QuestionService } from './_services/index';
import { AnswerService } from './_services/index';
import { InfoMenuComponent } from './info-menu/info-menu.component';
import { InterviewComponent } from './interview/interview.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { QuestionComponent } from './interviews/question/question.component';
import { AnswerComponent } from './interviews/question/answer/answer.component';

@NgModule({
  declarations: [
    InfoComponent,
    InfoMenuComponent,
    InterviewComponent,
    InterviewsComponent,
    QuestionComponent,
    AnswerComponent
  ],
  imports: [
    CommonModule,
    InfoRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [
		AffairsService,
    InterviewService,
    QuestionService,
    AnswerService
  ],  
})
export class InfoModule { }
