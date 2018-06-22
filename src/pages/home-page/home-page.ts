import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';
import { RecommandationPage } from '../recommandation/recommandation';
import * as firebase from 'firebase';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'page-home-page',
  templateUrl: 'home-page.html'
})
export class HomePagePage {
  connect : boolean = false ;
   Image :string ;
  constructor(public navCtrl: NavController,public sanitizer : DomSanitizer) {
    
  this.Image ="https://firebasestorage.googleapis.com/v0/b/yassine09841797.appspot.com/o/images%20(3).jpg?alt=media&token=c55de3b2-d2bb-4256-8df1-33522a5c8c6a";
  }
  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  goToRegister(params){
    if (!params) params = {};
    this.navCtrl.push(RegisterPage);
  } goToProfil(params){
    if (!params) params = {};
    //this.navCtrl.push(ProfilPage);
  } goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
  recommander(){
    this.navCtrl.setRoot(RecommandationPage, {
      connect : this.connect 
    });
}
}
