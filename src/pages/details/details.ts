import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  public charity: string;
  public details: string;
  public portfolio: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  presentPaymenModal() {
    let paymentModal = this.modalCtrl.create(PaymentPage);
    paymentModal.present();
    this.navCtrl.push(DetailsPage, {
      charity: this.charity
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
    this.charity = this.navParams.get('charity');
    this.details = this.navParams.get('details');
  }

}
