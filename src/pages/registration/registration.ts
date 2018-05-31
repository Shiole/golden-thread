import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { User } from '../../model/user';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  public user: User;
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

    this.navCtrl.setRoot(ProfilePage);
  }

}
