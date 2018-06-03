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
    this.water = new Charity();
    this.gates = new Charity();
    this.ocean = new Charity();
    
    this.projects = [
      this.water = {id: 1, name: 'Charity: water', details: 'test', image: 'https://upleaf.com/sites/default/files/styles/screenshots/public/resources/charitywater-logo.jpg?itok=OCGe0BqB'},
      this.gates = {id: 2, name: 'Bill & Melinda Gates Foundation', details: 'test', image: 'http://www.hrt.hr/media/tt_news/Bill-and-Melinda-Gates-Foundation.jpg'},
      this.ocean = {id: 3, name: 'Oceana', details: 'test', image: 'http://oceana.org/sites/default/files/oceana_logo_o.png'}
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
