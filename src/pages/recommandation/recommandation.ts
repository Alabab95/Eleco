import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TvPage } from '../tv/tv';
import { InfoPage } from '../info/info';
import { ElecPage } from '../elec/elec';
import { LampPage } from '../lamp/lamp';
import { ClimatiseursPage } from '../../pages/climatiseurs/climatiseurs';
import { HomePagePage } from '../../pages/home-page/home-page';



@IonicPage()
@Component({
  selector: 'page-recommandation',
  templateUrl: 'recommandation.html',
})
export class RecommandationPage {
  connect : boolean =false ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.connect=this.navParams.get("connect") ;
    console.log(this.connect);
    


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecommandationPage');
  }
  goToPageOne(params){
    if (!params) params = {};
    this.navCtrl.push(TvPage , {
      connect : this.connect
    });
  }
  goToPageTwo(params){
    if(!params) params = {};
    this.navCtrl.push(InfoPage, {
      connect : this.connect
    });
  }
  goToPageThree(params){
    if(!params) params = {};
    this.navCtrl.push(ElecPage, {
      connect : this.connect
    });
  }
  goToPageFour(params){
    if(!params) params = {};
    this.navCtrl.push(LampPage, {
      connect : this.connect
    });
  }
  goToPageFive(params){
    if(!params) params = {};
    this.navCtrl.push(ClimatiseursPage, {
      connect : this.connect
    });
    console.log("ajouter page5");
    
  }

  PushToHomePage(){

 this.navCtrl.setRoot(HomePagePage);
  }

}
