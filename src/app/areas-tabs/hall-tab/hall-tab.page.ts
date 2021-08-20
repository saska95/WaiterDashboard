import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { Utility } from 'src/app/services/utility';
import { Table } from 'src/app/shared/models/Table';

@Component({
  selector: 'app-hall-tab',
  templateUrl: 'hall-tab.page.html',
  styleUrls: ['hall-tab.page.scss'],
})
export class HallTabPage {
  hallTables: Table[];

  constructor(
    private authService: AuthService,
    private utility: Utility,
    private navCtrl: NavController
  ) {}

  ionViewWillEnter() {
    this.reload();
  }

  async reload() {
    this.hallTables = await this.utility.getTablesForArea(1);
  }

  logout() {
    this.authService.logOut();
    this.navCtrl.navigateRoot('/login');
  }
}
