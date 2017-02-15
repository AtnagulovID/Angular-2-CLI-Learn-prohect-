import { NgModule, ModuleWithProviders } from '@angular/core';
import {Http, HttpModule} from "@angular/http";
import { OpaqueToken } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../_services/index';
import { AuthGuard } from '../_guards/index';

import { TRANSLATION_PROVIDERS, TRANSLATIONS, TranslatePipe, TranslateService }   from '../_translate/index';

//alert
import {AlertService, AlertComponent} from "../_alert/index";


@NgModule({
  imports: [
    CommonModule,
	HttpModule
  ],
  declarations: [
	AlertComponent,
    TranslatePipe    
  ],
  exports: [
	AlertComponent,
    TranslatePipe
  ],
})

export class SharedModule {
    static forRoot():ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
				AuthenticationService,
				AuthGuard,
                AlertService,
                TRANSLATION_PROVIDERS,
                TranslateService                
            ]
        };
    }
}
