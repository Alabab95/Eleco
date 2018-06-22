import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AmpoulesPage } from '../../pages/ampoules/ampoules';
import { ElectromenagerPage } from '../../pages/electromenager/electromenager';
import { InformatiquePage } from '../../pages/informatique/informatique';
import { AutresPage } from '../../pages/autres/autres';
import { TeleviseurPage } from '../../pages/televiseur/televiseur';


@Component({
  selector: 'page-categorie',
  templateUrl: 'categorie.html',
})
export class CategoriePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  PushToElectro(){
     this.navCtrl.push(ElectromenagerPage);
  }

  PushToInfo(){
    this.navCtrl.push(InformatiquePage);

  }

  PushToTV(){
    this.navCtrl.push(TeleviseurPage);

  }

  PushToAmpoules() {
    this.navCtrl.push(AmpoulesPage);

  }

  PushToAutres(){
    this.navCtrl.push(AutresPage);

  }

}
