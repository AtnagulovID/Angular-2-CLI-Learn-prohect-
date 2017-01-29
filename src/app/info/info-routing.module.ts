import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { InfoComponent }    from './info/info.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: InfoComponent}
  ])],
  exports: [RouterModule]
})
export class InfoRoutingModule {}
