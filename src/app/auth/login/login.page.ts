import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  isEmailValid = true;
  isPasswordValid = true;

  constructor(private router: Router, private navCtrl: NavController, private authService: AuthService) { }

  ngOnInit() { }

  redirectToLogin() {
    this.navCtrl.navigateRoot(`/areas-tabs`);
  }

  login() {
    console.log('radi');
    console.log('Email:' + this.loginForm.get('email').value);
    console.log('Password:' + this.loginForm.get('password').value);
    if (!this.loginForm.valid) {
      if (this.loginForm.get('email').valid) {
        this.isEmailValid = true;
      } else {
        this.isEmailValid = false;
      }

      if (this.loginForm.get('password').valid) {
        this.isPasswordValid = true;
      } else {
        this.isPasswordValid = false;
      }
      return;
    }

    this.redirectToLogin();
  }

  onLogin() {
    this.authService.logIn();
    this.router.navigateByUrl('/areas-tabs');
  }

  //SA VEZBI
  // onLogin(loginForm: NgForm) {
  //   console.log(loginForm);
  //   if (loginForm.valid) {
  //     this.authService.logIn(loginForm.value).subscribe(next: resData => {
  //       console.log('prijava uspesna firebase');
  //       console.log(resData);
  //       this.router.navigateByUrl('/areas-tabs');
  //     });
  //   }

  // onRegister() {
  //   this.authService.register(this.loginForm.value)._subscribe(next: resData => {
  //     console.log('uspela reg');

  //   });

  // }
}

