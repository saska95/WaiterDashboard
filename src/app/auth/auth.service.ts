import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Waiter } from '../shared/models/Waiter';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';


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
  constructor(private http: HttpClient) {
  }


  get isUserAuthenticated(): boolean {
    return this.userAuthenticated;
  }

  set isUserAuthenticated(value: boolean) {
    this.userAuthenticated = true;
  }


  logIn(waiter: Waiter) {
    this.userAuthenticated = true;
    return this.http.post<AuthResponseData>
      (`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`,
        { email: waiter.email, password: waiter.password }).pipe(
          tap(() => { this.userAuthenticated = true })
        );
  }


  logOut() {
    this.userAuthenticated = false;
    //console.log("POZVAO IZ AUTHA");
  }



}
