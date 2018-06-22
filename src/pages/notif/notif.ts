
import { Component } from '@angular/core';
import { NavController, Platform, AlertController,NavParams  } from 'ionic-angular';

@Component({
  selector: 'page-notif',
  templateUrl: 'notif.html',
})
export class NotifPage {

  data = { title:'', description:'', date:'', time:'' };


  constructor(public navCtrl: NavController, public navParams: NavParams ,
    public platform: Platform,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotifPage');
  }

  
}
