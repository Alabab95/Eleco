import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePagePage } from '../home-page/home-page';
import { AboutUsPage } from '../about-us/about-us';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = HomePagePage;
  tab2Root: any = AboutUsPage;
  constructor(public navCtrl: NavController) {
  }
  
}
