import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistrationPage } from '../registration/registration';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navToHome() {
    this.navCtrl.push(HomePage);
  }

  navToLogin() {
    this.navCtrl.push(LoginPage);
  }

  navToRegistration() {
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.push(RegistrationPage);
  }

}
