import { Injectable } from '@angular/core';
import { CanLoad, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(
    private authService: AuthService,
    private navCtrl: NavController
  ) {}
  canLoad():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.authService.isUserAuthenticated) {
      this.navCtrl.navigateRoot('/login');
    }
    return this.authService.isUserAuthenticated();
  }
}
