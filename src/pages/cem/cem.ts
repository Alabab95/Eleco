import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import {DomSanitizer} from '@angular/platform-browser';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-cem',
  templateUrl: 'cem.html',
})
export class CemPage {

  rem: firebase.database.Reference;
  items : Observable<any>;
  favs : AngularFireList<any>;

  constructor(public toastCtrl: ToastController ,public sanitizer : DomSanitizer   , public navCtrl: NavController,afdb : AngularFireDatabase ) {
    this.items = afdb.list('Products/cem/').valueChanges();
    if(firebase.auth().currentUser!=null){
      
      this.rem = firebase.database().ref('Favourites/'+firebase.auth().currentUser.uid );
     }
  }
  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CemPage');
  }
  AddToFavourites(item){
    console.log(firebase.auth().currentUser);

    if (firebase.auth().currentUser!=null){
      
      let ref = this.rem.push({});
      ref.set({
        Model : item.Model,
        Image : item.Image,
        Price : item.Prix,
        key : ref.key,
      });
      
        let toast = this.toastCtrl.create({
          message: 'Le produit a été ajouté ',
          duration: 1200
        });
        toast.present();
    }
    
      else{
        let toast = this.toastCtrl.create({
          message: 'Please Log in first !',
          duration: 1200
        });
        toast.present();
      }
    
  }

}
