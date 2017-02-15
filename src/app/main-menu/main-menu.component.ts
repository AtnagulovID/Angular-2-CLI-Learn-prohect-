import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/index'; 
import { TranslateService } from '../_translate/index';


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  public supportedLangs: any[];

  constructor(private authenticationService: AuthenticationService,
			  private translateService: TranslateService) {
  }

  ngOnInit() {
    this.selectLang('ru');        

    this.supportedLangs = [
      { display: 'English', value: 'en' },
      { display: 'Русский', value: 'ru' },
      { display: 'Башkорт', value: 'bs' },
    ];

  }

    selectLang(lang: string) {
      this.translateService.use(lang);
    }


}
