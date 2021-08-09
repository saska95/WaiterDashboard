import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router,
    private authService: AuthService,
    private utility: Utility
  ) {}

  ionViewWillEnter() {
    this.reload();
  }

  async reload() {
    this.gardenTables = await this.utility.getTablesForArea(2);
  }

  logout() {
    this.authService.logOut();
    this.router.navigateByUrl('/login');
  }
}
