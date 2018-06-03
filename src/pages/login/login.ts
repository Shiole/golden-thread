import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { RegistrationPage } from '../registration/registration';
import { TabsPage } from '../tabs/tabs';

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

  navToTabs() {
    this.navCtrl.push(TabsPage, {
      username: this.username
    });
  }

}
