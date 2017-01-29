import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/index'; 
import { TranslateService } from '../_translate/index';


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
			  private translateService: TranslateService) {
  }

  ngOnInit() {
    this.translateService.addLangs(["en", "ru", "bs"]);
    this.translateService.setDefaultLang('bs');

    const browserLang = this.translateService.getBrowserLang();
	this.translateService.use(browserLang.match(/en|ru|bs/) ? browserLang : 'en');
  }

}
