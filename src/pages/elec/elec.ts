import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AspirateursPage } from '../aspirateurs/aspirateurs';
import { SCheLingePage } from '../s-che-linge/s-che-linge';
import { AutomatiquesPage } from '../automatiques/automatiques';
import { AHublotPage } from '../a-hublot/a-hublot';
import { OuvertureParLeDessusPage } from '../ouverture-par-le-dessus/ouverture-par-le-dessus';
import { Largeur45CmPoseLibrePage } from '../largeur45cm-pose-libre/largeur45cm-pose-libre';
import { CapsulesEtDosettesPage } from '../capsules-et-dosettes/capsules-et-dosettes';
///////////////////////////////////
import { Largeur45cmIntePage  } from '../../pages/largeur45cm-inte/largeur45cm-inte';
import { Largeur60cmIntePage  } from '../../pages/largeur60cm-inte/largeur60cm-inte';
import { Largeur45PosePage  } from '../../pages/largeur45-pose/largeur45-pose';
import { Largeur60PosePage  } from '../../pages/largeur60-pose/largeur60-pose';
import { TabletopPage  } from '../../pages/tabletop/tabletop';
import { PorteSansCongelateurPage  } from '../../pages/1-porte-sans-congelateur/1-porte-sans-congelateur';
import { PorteAvecCongelateurPage  } from '../../pages/1-porte-avec-congelateur/1-porte-avec-congelateur';
import {  PortesMoisDe300LitresPage } from '../../pages/portes-mois-de300-litres/portes-mois-de300-litres';
import { PortesPlusDe300LitresPage  } from '../../pages/portes-plus-de300-litres/portes-plus-de300-litres';
import { CTableTopPage  } from '../../pages/table-top/table-top';
import {  ArmoirePlusDe230LPage } from '../../pages/armoire-plus-de230-l/armoire-plus-de230-l';
import { ArmoireMoisDe230LPage  } from '../../pages/armoire-mois-de230-l/armoire-mois-de230-l';
import {  CoffrePlus230LPage } from '../../pages/coffre-plus230-l/coffre-plus230-l';
import { CoffreMois230LPage  } from '../../pages/coffre-mois230-l/coffre-mois230-l';



@Component({
  selector: 'page-elec',
  templateUrl: 'elec.html',
})
export class ElecPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElecPage');
  }
  goToAspirateurs(params){
    if(!params) params = {};
    this.navCtrl.push(AspirateursPage);
  }
  goToSCheLinge(params){
    if(!params) params = {};
    this.navCtrl.push(SCheLingePage);
  }
  goToAutomatiques(params){
    if(!params) params = {};
    this.navCtrl.push(AutomatiquesPage);
  }
  goToAHublot(params){
    if(!params) params = {};
    this.navCtrl.push(AHublotPage);
  }
  goToOuvertureParLeDessus(params){
    if(!params) params = {};
    this.navCtrl.push(OuvertureParLeDessusPage);
  }
  
  goToCapsulesEtDosettes(params){
    if(!params) params = {};
    this.navCtrl.push(CapsulesEtDosettesPage);
  }

 





  Largeur45CmIntegrables(){
    this.navCtrl.push(Largeur45cmIntePage);
  }
  goToLargeur45CmPoseLibre(){
    this.navCtrl.push(Largeur45PosePage);
  }
  goToLargeur60CmPoseLibre(){
    this.navCtrl.push(Largeur60PosePage);
  }
  goToLargeur60CmPoseIntegrable(){
    this.navCtrl.push(Largeur60cmIntePage);
  }
  TableTop(){    
    this.navCtrl.push(TabletopPage);
  }
  PorteSansCongelateur(){
    this.navCtrl.push(PorteSansCongelateurPage);
  }
  PorteAvecCongelateur(){
    this.navCtrl.push(PorteAvecCongelateurPage);
  }
  PortesMoisDe300L(){
    this.navCtrl.push(PortesMoisDe300LitresPage);
  }
  PortesPlusDe300L(){
    this.navCtrl.push(PortesPlusDe300LitresPage);
  }
  Table_Top(){
    this.navCtrl.push(CTableTopPage);
  }
  ArmoiresMoisDe230Litres(){
    this.navCtrl.push(ArmoirePlusDe230LPage);
  }
  ArmoiresPlusDe230Litres(){
    this.navCtrl.push(ArmoireMoisDe230LPage);
  }
  CoffresMoinsDe230Litres(){    
    this.navCtrl.push(CoffrePlus230LPage);
  }
  CoffesPlusDe230Litres(){
    this.navCtrl.push(CoffreMois230LPage);
  }


}
