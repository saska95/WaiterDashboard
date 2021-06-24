import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Waiter } from '../shared/models/Waiter';
import { HttpClient } from '@angular/common/http';



interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
  expiresIn: string;
  registered?: boolean;
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userAuthenticated = false;

  // constructor(private http: HttpClient) {
  // }
  constructor() {
  }

  get isUserAuthenticated(): boolean {
    return this.userAuthenticated;
  }

  // register(waiter: Waiter) {
  //   this.userAuthenticated = true;
  //   return this.http.post<AuthResponseData>(url:
  // `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`,
  //     body: { email: waiter.password, password: waiter.password, returnSecureToken: true });
  // }


  // logIn(waiter: Waiter) {
  //   this.userAuthenticated = true;
  //   return this.http.post<AuthResponseData>(url:
  // `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`,
  //     body: { email: waiter.password, password: waiter.password, returnSecureToken: true });
  // }
  logIn() {
    this.userAuthenticated = true;
  }
  logOut() {
    this.userAuthenticated = false;
  }
}
