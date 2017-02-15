import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services/index';
import { AffairsService } from '../_services/index';
import { Affairs } from '../../_models/index';
import { AlertService } from '../../_alert/index';


@Component({
  selector: 'app-second-item',
  templateUrl: './second-item.component.html',
  styleUrls: ['./second-item.component.css']
})
export class SecondItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
