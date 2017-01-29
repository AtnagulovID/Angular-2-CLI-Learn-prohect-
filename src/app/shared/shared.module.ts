import { NgModule, ModuleWithProviders } from '@angular/core';
import {Http, HttpModule} from "@angular/http";

import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../_services/index';
import { AuthGuard } from '../_guards/index';
//https://github.com/ocombe/ng2-translate/tree/master/examples
//https://www.npmjs.com/package/ng2-translate
import {TranslatePipe} from "../_translate/translate.pipe";
import {TranslateParser, DefaultTranslateParser} from "../_translate/translate.parser";
import {TranslateService, TranslateLoader, TranslateStaticLoader} from "../_translate/translate.service";
import {TranslateDirective} from "../_translate/translate.directive";
//alert
import {AlertService, AlertComponent} from "../_alert/index";


export function translateLoaderFactory(http: Http) {
    return new TranslateStaticLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
	HttpModule
  ],
  declarations: [
    TranslatePipe,
    TranslateDirective,
	AlertComponent
  ],
  exports: [
    TranslatePipe,
    TranslateDirective,
	AlertComponent
  ],
})

export class SharedModule {
    static forRoot(providedLoader: any = {
				   provide: TranslateLoader,
				   useFactory: translateLoaderFactory,
				   deps: [Http]
				   
	}):ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
				AuthenticationService,
				AuthGuard,
				AlertService,
                providedLoader,
                TranslateService,
                { provide: TranslateParser, useClass: DefaultTranslateParser }
            ]
        };
    }
}
