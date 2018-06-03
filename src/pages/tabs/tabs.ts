import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { PortfolioPage } from '../portfolio/portfolio';
import { ProjectsPage } from '../projects/projects';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public username: string;
  public firstName: string;
  public lastName: string;
  public email: string;

  pages: Array<{title: string, component: any}>;
  myContainer: Array<any>;

  profile = ProfilePage;
  portfolio = PortfolioPage;
  projects = ProjectsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navParams.get('username');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
