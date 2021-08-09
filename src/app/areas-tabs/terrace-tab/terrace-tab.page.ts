import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router,
    private authService: AuthService,
    private utility: Utility
  ) {}

  ionViewWillEnter() {
    this.reload();
  }

  async reload() {
    this.terraceTables = await this.utility.getTablesForArea(3);
  }

  logout() {
    this.authService.logOut();
    this.router.navigateByUrl('/login');
  }
}
