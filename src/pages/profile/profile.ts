import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { ProjectsPage } from '../projects/projects';
import { PortfolioPage } from '../portfolio/portfolio';
import { PaymentPage } from '../payment/payment';
import { HomePage } from '../home/home';
import { User } from '../../model/user';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    console.log('userParams', navParams.data);
    console.log( navParams.get('username'));

  }

  navToPaymentPage() {
    this.navCtrl.push(PaymentPage);
  }

  navLogOut() {
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    console.log(this.navParams.data);
    this.username = this.navParams.get("username");
    this.firstName = this.navParams.get("firstName");
    this.lastName = this.navParams.get("lastName");
    this.email = this.navParams.get("email");
  }

}
