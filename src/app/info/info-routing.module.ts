import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { InfoComponent }    from './info/info.component';
import { FirstItemComponent } from './first-item/first-item.component';
import { SecondItemComponent } from './second-item/second-item.component';
import { ThreeItemComponent } from './three-item/three-item.component';
import { InterviewsComponent } from './interviews/interviews.component';

@NgModule({
  imports: [RouterModule.forChild([
          { path: '', component: InfoComponent,
          children: [
          { path: '', component: FirstItemComponent},
          { path: 'first', component: FirstItemComponent},
          { path: 'second', component: SecondItemComponent},
          { path: 'three', component: ThreeItemComponent},
          { path: 'interviews', component: InterviewsComponent}
          ]},
  ])],
  exports: [RouterModule]
})
export class InfoRoutingModule {}
