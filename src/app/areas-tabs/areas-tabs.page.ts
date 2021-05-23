import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-areas-tabs',
  templateUrl: 'areas-tabs.page.html',
  styleUrls: ['areas-tabs.page.scss']
})
export class AreasTabsPage {

  constructor(private route: Router, private navCtrl: NavController) {}

}
