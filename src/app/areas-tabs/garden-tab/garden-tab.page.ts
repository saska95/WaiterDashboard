import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-garden-tab',
  templateUrl: 'garden-tab.page.html',
  styleUrls: ['garden-tab.page.scss'],
})
export class GardenTabPage {
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private authService: AuthService
  ) {}

  logout() {
    this.authService.logOut();
    // console.log("POZVAO IZ HALLA");
    this.router.navigateByUrl('/login');
  }
}
