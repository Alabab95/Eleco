import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tv1Page } from '../tv1/tv1';

import { Taille70100CmPage } from '../taille70100cm/taille70100cm';
import { TailleSupRieure100CmPage } from '../taille-sup-rieure100cm/taille-sup-rieure100cm';
import { KPage } from '../k/k';


@Component({
  selector: 'page-tv',
  templateUrl: 'tv.html',
})
export class TvPage {
  connect : boolean ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TvPage');
  }
  goToTv1(params){
    if(!params) params = {};
    this.navCtrl.push(Tv1Page, {
      connect : this.connect
    });
  }
  goToTv2(params){
    if(!params) params = {};
    this.navCtrl.push(Taille70100CmPage, {
      connect : this.connect
    });
  }
  goToTv3(params){
    if(!params) params = {};
    this.navCtrl.push(TailleSupRieure100CmPage, {
      connect : this.connect
    });
  }
  goToTv4(params){
    if(!params) params = {};
    this.navCtrl.push(KPage, {
      connect : this.connect
    });
  }
  
  
  

}
