import { Injectable } from '@angular/core';
import { CanLoad, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}
  canLoad():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.authService.isUserAuthenticated) {
      this.router.navigateByUrl('/login');
    }
    return this.authService.isUserAuthenticated();
  }
}
