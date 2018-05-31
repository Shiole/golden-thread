import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { Charity } from '../../model/charity';

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

  public projects: Array<Charity>;
  public water: Charity;
  public gates: Charity;
  public ocean: Charity;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.projects = [
      this.water = {id: 1, name: 'Charity: water', details: 'test'},
      this.gates = {id: 2, name: 'Bill & Melinda Gates Foundation', details: 'test'},
      this.ocean = {id: 3, name: 'Oceana', details: 'test'}
    ];

  }

  navToDetails(project) {
    this.navCtrl.push(DetailsPage, {
      charity: project.name,
      details: project.details
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
  }

}
