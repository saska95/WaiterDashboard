import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
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
    private router: Router,
    private navCtrl: NavController,
    private authService: AuthService,
    private apiService: ApiService
  ) {}

  ngOnInit() {}

  redirectToLogin() {
    this.navCtrl.navigateRoot(`/areas-tabs`);
  }

  login() {
    //Ovde sa inputa povlcacis vrednosti
    this.user = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value,
    };

    //Poziva firebase da porveri da li ima korisnika
    this.authService.logIn(this.user).subscribe(
      (data) => {
        this.router.navigateByUrl('/areas-tabs');
        // this.redirectToLogin();
      },
      (error) => {
        console.log('Hello here is error', error);
        this.authService.isUserAuthenticated = false;
      }
    );

    //send and write data in realtime database
    // this.apiService.sendData(null).subscribe(data => console.log(data,"PRvi put?")
    // )

    //get data fomr reltiem dtabase
    // this.apiService.getData('waiter').subscribe(data => console.log(data,"dobila sam podatke")
    // )

    // Test
    this.authService.isUserAuthenticated = true;
    this.router.navigateByUrl('/areas-tabs');
  }
}
