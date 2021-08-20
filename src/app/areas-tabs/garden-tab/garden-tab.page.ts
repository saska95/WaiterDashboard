import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { Utility } from 'src/app/services/utility';
import { Table } from 'src/app/shared/models/Table';

@Component({
  selector: 'app-garden-tab',
  templateUrl: 'garden-tab.page.html',
  styleUrls: ['garden-tab.page.scss'],
})
export class GardenTabPage {
  gardenTables: Table[];

  constructor(
    private authService: AuthService,
    private utility: Utility,
    private navCtrl: NavController
  ) {}

  ionViewWillEnter() {
    this.reload();
  }

  async reload() {
    this.gardenTables = await this.utility.getTablesForArea(2);
  }

  logout() {
    this.authService.logOut();
    this.navCtrl.navigateRoot('/login');
  }
}
