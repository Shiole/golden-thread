import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ProjectsPage } from '../projects/projects';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  public firstName: string;
  public lastName: string;
  public dateOfBirth: string;
  public username: string;
  public email: string;
  public address: string;
  public city: string;
  public country: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  navToProjectsPage() {
    this.navCtrl.push(ProjectsPage);
  }

  navToHomePage() {
    this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {
    this.firstName = this.navParams.get("firstName");
    this.lastName = this.navParams.get("lastName");
    this.dateOfBirth = this.navParams.get("dateOfBirth");
    this.username = this.navParams.get("username");
    this.email = this.navParams.get("email");
    this.address = this.navParams.get("address");
    this.city = this.navParams.get("city");
    this.country = this.navParams.get("country");
  }

}
