import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { Utility } from 'src/app/services/utility';
import { Table } from 'src/app/shared/models/Table';

@Component({
  selector: 'app-terrace-tab',
  templateUrl: 'terrace-tab.page.html',
  styleUrls: ['terrace-tab.page.scss'],
})
export class TerraceTabPage {
  terraceTables: Table[];

  constructor(
    private authService: AuthService,
    private utility: Utility,
    private navCtrl: NavController
  ) {}

  ionViewWillEnter() {
    this.reload();
  }

  async reload() {
    this.terraceTables = await this.utility.getTablesForArea(3);
  }

  logout() {
    this.authService.logOut();
    this.navCtrl.navigateRoot('/login');
  }
}
