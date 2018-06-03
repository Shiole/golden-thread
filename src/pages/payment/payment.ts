import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
  public successNotification: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.user = new User;
    this.donatedList = [];
  }

  donate() {
    this.presentConfirm();
    /* if (this.donatedList.indexOf(this.charity) < 0) {
      this.donatedList.push(this.charity);
    }
    let sum = this.user.totalDonated + this.amount;
    this.navCtrl.push(PortfolioPage, {
      amount: this.amount,
      totalDonated: sum,
      donatedList: this.donatedList
    }); */
  }

  cancel() {
    this.navCtrl.pop();
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm donation',
      message: 'Do you want to make this donation?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Donate',
          handler: () => {
            console.log('Donate clicked');
            this.donationSuccessful();
            let sum = this.user.totalDonated + this.amount;
            this.navCtrl.setRoot(PortfolioPage, {
              amount: this.amount,
              totalDonated: sum,
              donatedList: this.donatedList
            })
          }
        }
      ]
    });
    alert.present();
  }

  donationSuccessful() {
    let alert = this.alertCtrl.create({
      title: 'Donation Successful',
      subTitle: 'Thank you for donating!',
      buttons: ['Ok']
    });
    console.log('Donate clicked');

    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
    this.charity = this.navParams.get('charity');
  }

}
