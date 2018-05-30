import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public username: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  navToProfilePage() {
    this.navCtrl.push(ProfilePage, {
      username: this.username
    });
  }

}
