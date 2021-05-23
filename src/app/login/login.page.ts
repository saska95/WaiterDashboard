import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})

export class LoginPage implements OnInit {


  loginForm= new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  });

  isUsernameValid: boolean=true;
  isPasswordValid: boolean=true;

constructor(private route: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  redirectToLogin() {
    this.navCtrl.navigateRoot(`/areas-tabs`);

  }


  login(){
    console.log("radi");
    console.log('Username:' + this.loginForm.get('username').value);
    console.log('Password:' + this.loginForm.get('password').value);
if(!this.loginForm.valid){
  if(this.loginForm.get('username').valid){
    this.isUsernameValid=true;
  }else{
    this.isUsernameValid=false;
  }

  if(this.loginForm.get('password').valid){
    this.isPasswordValid=true;
  }else{
    this.isPasswordValid=false;
  }
return;
}

   this.redirectToLogin();
  }
}


