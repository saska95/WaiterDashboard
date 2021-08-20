import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Waiter } from '../shared/models/Waiter';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@capacitor/storage';
import { NavController } from '@ionic/angular';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
  expiresIn: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private navCtrl: NavController) {}

  async isUserAuthenticated() {
    const ret = await Storage.get({ key: 'isAuthenticated' });
    return Boolean(ret.value);
  }

  logIn(waiter: Waiter) {
    return new Promise((resolve, reject) => {
      this.http
        .post<AuthResponseData>(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`,
          { email: waiter.email, password: waiter.password }
        )
        .subscribe(
          async (res) => {
            await Storage.set({
              key: 'isAuthenticated',
              value: JSON.stringify(true),
            });
            await Storage.set({
              key: 'loggedUser',
              value: JSON.stringify(res),
            });
            this.navCtrl.navigateRoot('/areas-tabs');
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
    });
  }

  async logOut() {
    await Storage.set({
      key: 'isAuthenticated',
      value: JSON.stringify(false),
    });
    await Storage.remove({
      key: 'loggedUser',
    });
  }

  async getLoggedUser() {
    const res = await Storage.get({
      key: 'loggedUser',
    });
    return JSON.parse(res.value);
  }
}
