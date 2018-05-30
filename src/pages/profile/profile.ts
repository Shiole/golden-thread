import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ProjectsPage } from '../projects/projects';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  public username: string;
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
    this.username = this.navParams.get("username");
    this.password = this.navParams.get("password");
  }

}
