import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  public firstName: string;
  public lastName: string;
  public dateOfBirth: string;
  public username: string;
  public email: string;
  public address: string;
  public city: string;
  public country: string;
  public password: string;

  constructor(public navCtrl: NavController) {

  }

  navigateToProfilePage() {
    this.navCtrl.push(ProfilePage, {
      firstName: this.firstName,
      lastName: this.lastName,
      dateOfBirth: this.dateOfBirth,
      username: this.username,
      email: this.email,
      address: this.address,
      city: this.city,
      country: this.country,
      password: this.password
    });
  }

}
