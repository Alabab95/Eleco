import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'page-fav',
  templateUrl: 'fav.html',
})
export class FavPage {

  
  public rem :firebase.database.Reference;
  
  fav : Observable<any>;
  constructor(public toastCtrl: ToastController ,public sanitizer : DomSanitizer ,public navCtrl: NavController, public navParams: NavParams,public afdb : AngularFireDatabase) {
    this.fav = afdb.list('Favourites/'+firebase.auth().currentUser.uid).valueChanges();
    this.rem = firebase.database().ref('Favourites/'+firebase.auth().currentUser.uid);



  }
  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavPage');
  }
  remove(item){
   
    

    //this.afDb.object('/profils/MkJ7gEuViHQEzPoT4ibV3kAykxi1'+ '/'+ this.p.key).remove();
   this.afdb.object('Favourites/'+firebase.auth().currentUser.uid+'/'+ item.key).remove();
   let toast = this.toastCtrl.create({
    message: 'Le produit a été supprimé de la liste ',
    duration: 1200
  });
  toast.present();
    
  }

}
