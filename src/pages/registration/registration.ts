import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  public username: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;
  public myProjects: Array<any>;

  constructor(public navCtrl: NavController) {
  }

  navToProfilePage() {
    this.navCtrl.push(ProfilePage, {
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    });
  }

  navHome() {
    this.navCtrl.push(HomePage);
  }

}
