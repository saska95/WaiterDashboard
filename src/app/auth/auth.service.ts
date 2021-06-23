import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userAuthenticated = false;

  constructor() { }

  get isUserAuthenticated(): boolean {
    return this.userAuthenticated;
  }

  logIn() {
    this.userAuthenticated = true;
  }
  logOut() {
    this.userAuthenticated = false;
  }
}
