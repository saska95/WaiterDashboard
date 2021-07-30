import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Waiter } from 'src/app/shared/models/Waiter';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  isEmailValid = true;
  isPasswordValid = true;
  user: Waiter = null;
  constructor(
    private navCtrl: NavController,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  redirectToLogin() {
    this.navCtrl.navigateRoot(`/areas-tabs`);
  }

  async login() {
    this.user = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value,
    };
    await this.authService.logIn(this.user);
  }
}
