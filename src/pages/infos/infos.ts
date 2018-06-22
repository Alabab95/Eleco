import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'page-infos',
  templateUrl: 'infos.html',
})
export class InfosPage {
  Image :string ;

  constructor(public navCtrl: NavController, public navParams: NavParams,public sanitizer : DomSanitizer) {
    this.Image="https://firebasestorage.googleapis.com/v0/b/yassine09841797.appspot.com/o/slide.jpg?alt=media&token=3fb31233-3625-4c07-b715-d56833334efc";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfosPage');
  }
  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
