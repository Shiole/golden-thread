import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { RegistrationPage } from '../registration/registration';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public username: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  navToRegistration() {
    this.navCtrl.push(RegistrationPage);
  }

  navToProfilePage() {
    this.navCtrl.push(ProfilePage, {
      username: this.username
    });
  }

}
