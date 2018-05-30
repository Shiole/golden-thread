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

  public projects: object;
  public water: object;
  public gates: object;
  public ocean: object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.projects = [
      this.water = {name: 'Charity: water', description: 'test'},
      this.gates = {name: 'Bill & Melinda Gates Foundation', description: 'test'},
      this.ocean = {name: 'Oceana', description: 'test'}
    ];

  }

  navToDetails(project) {
    this.navCtrl.push(DetailsPage, {
      charity: project.name,
      description: project.description
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
  }

}
