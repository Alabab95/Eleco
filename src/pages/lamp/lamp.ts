import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompatiblesPage } from '../compatibles/compatibles';
import { FlammesPage } from '../flammes/flammes';
import { CedPage } from '../ced/ced';
import { CemPage } from '../cem/cem';


import { Gu10CompatiblesPage  } from '../../pages/gu10-compatibles/gu10-compatibles';
import { ClassiqueEclerageFortPage  } from '../../pages/classique-eclerage-fort/classique-eclerage-fort';
import { AutreSpotsPage  } from '../../pages/autre-spots/autre-spots';
import { Gu53Page  } from '../../pages/gu53/gu53';
import { AutresSpotsGu53Page  } from '../../pages/autres-spots-gu53/autres-spots-gu53';

@Component({
  selector: 'page-lamp',
  templateUrl: 'lamp.html',
})
export class LampPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LampPage');
  }
  goToComp(){
    this.navCtrl.push(CompatiblesPage);
  }
  goToFlam(){
    this.navCtrl.push(FlammesPage);
  }
  goToCed(){
    this.navCtrl.push(CedPage);
  }
  goToCem(){
    this.navCtrl.push(CemPage);
  }



  GoToFort(){
    this.navCtrl.push(ClassiqueEclerageFortPage);
  }
  goToGU10Compatible(){
    this.navCtrl.push(Gu10CompatiblesPage);
  }
  goToGU10Spots(){
    this.navCtrl.push(AutreSpotsPage);
  }
  goToGU5Compatible(){
    this.navCtrl.push(Gu53Page);
  }
  goToAutresSpots(){
    this.navCtrl.push(AutresSpotsGu53Page);
  }

}
