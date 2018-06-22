import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Pouces1720Page } from '../pouces1720/pouces1720';
import { Pouces2122Page } from '../pouces2122/pouces2122';
import { Pouces23Page } from '../pouces23/pouces23';
import { Pouces24Page } from '../pouces24/pouces24';
import { Pouces27Page } from '../pouces27/pouces27';
import { ImprimantesPage } from '../imprimantes/imprimantes';
import { MultifonctionsPage } from '../multifonctions/multifonctions';
///////////////////////////////////////
import { Color1_21Page } from '../../pages/color1-21/color1-21';
import { Color21_40Page } from '../../pages/color21-40/color21-40';
import { Color41_80Page } from '../../pages/color41-80/color41-80';
import { GoToImprCouleur1_20Page } from '../../pages/go-to-impr-couleur1-20/go-to-impr-couleur1-20';
import { NoirEtBlanc41_80Page } from '../../pages/noir-et-blanc41-80/noir-et-blanc41-80';
import { NoirEtBlanc21_40Page } from '../../pages/noir-et-blanc21-40/noir-et-blanc21-40';
import { ToImprCouleur21_100Page } from '../../pages/to-impr-couleur21-100/to-impr-couleur21-100';
import { ToNoirEtBlanc1_20Page  } from '../../pages/to-noir-et-blanc1-20/to-noir-et-blanc1-20';
import { NoirEtBlancPage  } from '../../pages/noir-et-blanc/noir-et-blanc';


@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
  goToP1720(){
    this.navCtrl.push(Pouces1720Page);
  }
  goToP2122(){
    this.navCtrl.push(Pouces2122Page);
  }
  goToP23(){
    this.navCtrl.push(Pouces23Page);
  }
  goToP24(){
    this.navCtrl.push(Pouces24Page);
  }
  goToP27(){
    this.navCtrl.push(Pouces27Page);
  }
  goToImp(){
    this.navCtrl.push(ImprimantesPage);
  }
  goToMulti(){
    this.navCtrl.push(MultifonctionsPage);
  }



  goToNoirEtBlanc(){
    console.log("3asba");
    

  //  this.navCtrl.push(NoirEtBlancPage);

  }
  goToImprCouleur1_20(){
    this.navCtrl.push(GoToImprCouleur1_20Page);

  }
  goToImprCouleur21_100(){
    this.navCtrl.push(ToImprCouleur21_100Page);

  }
  goToNoirEtBlanc1_20(){
    this.navCtrl.push(ToNoirEtBlanc1_20Page);

  }
  goToNoirEtBlanc21_40(){
    this.navCtrl.push(NoirEtBlanc21_40Page);


  }
  goToNoirEtBlanc41_80(){
    this.navCtrl.push(NoirEtBlanc41_80Page);

  }
  goToColor1_21(){
    this.navCtrl.push(Pouces1720Page);

  }
  goToColor21_40(){
    this.navCtrl.push(Color21_40Page);


  }
  goToColor41_80(){
    this.navCtrl.push(Color41_80Page);

  }

  
}
