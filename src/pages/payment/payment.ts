import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/user';
import { Charity } from '../../model/charity';
import { PortfolioPage } from '../portfolio/portfolio';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  public user: User;
  public charity: Charity;
  public amount: number;
  public totalDonated: number;
  public donatedList: Array<Charity>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = new User;
    this.donatedList = [];
  }

  donate() { 
    if (this.donatedList.indexOf(this.charity) < 0) {
      this.donatedList.push(this.charity);
    }
    let sum = this.user.totalDonated + this.amount;
    this.navCtrl.push(PortfolioPage, {
      amount: this.amount,
      totalDonated: sum,
      donatedList: this.donatedList
    });
  }

  cancel() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
    this.charity = this.navParams.get('charity');
  }

}
