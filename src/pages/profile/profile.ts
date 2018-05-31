import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ProjectsPage } from '../projects/projects';
import { PortfolioPage } from '../portfolio/portfolio';
import { PaymentPage } from '../payment/payment';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  public username: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  navToPortfolioPage() {
    this.navCtrl.push(PortfolioPage);
  }
  navToPaymentPage() {
    this.navCtrl.push(PaymentPage);
  }

  navToProjectsPage() {
    this.navCtrl.push(ProjectsPage);
  }

  navToHomePage() {
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot();
  }

  ionViewDidLoad() {
    this.username = this.navParams.get("username");
    this.firstName = this.navParams.get("firstName");
    this.lastName = this.navParams.get("lastName");
    this.email = this.navParams.get("email");
  }

}
