import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module";
import { InfoComponent } from './info/info.component';
import { InfoRoutingModule } from './info-routing.module';
import { AffairsService } from './_services/index';


@NgModule({
  declarations: [
    InfoComponent
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
