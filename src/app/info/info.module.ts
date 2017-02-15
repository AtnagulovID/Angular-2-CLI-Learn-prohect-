import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { InfoComponent } from './info/info.component';
import { InfoRoutingModule } from './info-routing.module';
import { AffairsService } from './_services/index';
import { InfoMenuComponent } from './info-menu/info-menu.component';
import { FirstItemComponent } from './first-item/first-item.component';
import { SecondItemComponent } from './second-item/second-item.component';
import { ThreeItemComponent } from './three-item/three-item.component';

@NgModule({
  declarations: [
    InfoComponent,
    InfoMenuComponent,
    FirstItemComponent,
    SecondItemComponent,
    ThreeItemComponent
  ],
  imports: [
    CommonModule,
    InfoRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [
		AffairsService
  ],  
})
export class InfoModule { }
