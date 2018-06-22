import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ClassAPage } from '../../pages/class-a/class-a';
import { ClassBPage } from '../../pages/class-b/class-b';
import { ClassCPage } from '../../pages/class-c/class-c';
import { ClassDPage } from '../../pages/class-d/class-d';
import { ClassEPage } from '../../pages/class-e/class-e';



@Component({
  selector: 'page-consommation',
  templateUrl: 'consommation.html',
})
export class ConsommationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  PushToClassA(){
    this.navCtrl.push(ClassAPage);
  }

  PushToClassB(){
    this.navCtrl.push(ClassBPage);
  }

  PushToClassC(){
    this.navCtrl.push(ClassCPage);
  }

  PushToClassD(){
    this.navCtrl.push(ClassDPage);
  }

  PushToClassE(){
    this.navCtrl.push(ClassEPage);
  }

}
