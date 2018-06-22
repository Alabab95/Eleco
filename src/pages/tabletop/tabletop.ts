
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import {DomSanitizer} from '@angular/platform-browser';
import * as firebase from 'firebase';


@Component({
  selector: 'page-tabletop',
  templateUrl: 'tabletop.html',
})

export class TabletopPage {

  rem: firebase.database.Reference;
  favs : AngularFireList<any>;
  items : Observable<any>
  constructor(public toastCtrl: ToastController ,public sanitizer : DomSanitizer   , public navCtrl: NavController, private afdb : AngularFireDatabase ) {
    this.items = afdb.list('Products/TableTop/').valueChanges();
    if(firebase.auth().currentUser!=null){
      this.rem = firebase.database().ref('Favourites/'+firebase.auth().currentUser.uid );
     }
  }
  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
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
