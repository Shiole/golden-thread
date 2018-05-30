import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details';

/**
 * Generated class for the ProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {

  projects: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.projects = [
      'Charity: water',
      'Bill & Melinda Gates Foundation',
      'Oceana'
    ];
  }

  navToProject() {
    this.navCtrl.push(DetailsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
  }

}
