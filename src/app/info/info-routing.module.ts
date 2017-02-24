import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { InfoComponent }    from './info/info.component';
import { InterviewsComponent } from './interviews/interviews.component';

@NgModule({
  imports: [RouterModule.forChild([
          { path: '', component: InfoComponent,
          children: [
          { path: '', component: InterviewsComponent},
          { path: 'interviews', component: InterviewsComponent}
          ]},
  ])],
  exports: [RouterModule]
})
export class InfoRoutingModule {}
