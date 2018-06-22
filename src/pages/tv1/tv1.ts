import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase ,AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {DomSanitizer} from '@angular/platform-browser';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { LoginPage } from '../login/login';
import { ToastPage } from '../../providers/toast/toast';

import { ToastController } from 'ionic-angular';




@Component({
  selector: 'page-tv1',
  templateUrl: 'tv1.html',
})
export class Tv1Page {

  check: boolean = false;
  test: boolean;
  compteurRef: firebase.database.Reference;
  item1: AngularFireList<{}>;
  rem: firebase.database.Reference;
  items: Observable<any[]>;
  favs : AngularFireList<any>;
  produits : Array<any>=[];
  var : boolean =false ;

  constructor(public toastCtrl: ToastController ,
    private afAuth: AngularFireAuth,
    public sanitizer : DomSanitizer  ,
    public navCtrl: NavController,
    public navParams: NavParams,
    public afdb: AngularFireDatabase) {

    this.items = afdb.list('Products/tailleinf70/').valueChanges();
    console.log(firebase.auth().currentUser);

   if(firebase.auth().currentUser!=null){
      this.rem = firebase.database().ref('Favourites/'+firebase.auth().currentUser.uid );
   }
  }
/** 
      this.favs=afdb.list('Favourites/'+firebase.auth().currentUser.uid) ;
     

     this.compteurRef = firebase.database().ref('Favourites/'+firebase.auth().currentUser.uid );
   this.compteurRef.on('value', produitList => {
    let produits = [];

    produitList.forEach( produit => {
      this.produits.push(produit.val().Image);
      return false ;
      
    });

    
    });
  
**/
  
   dataExists(url : string ) {
    
     
     if (firebase.auth().currentUser!=null){

      for (var item of this.produits) {
        console.log(item); 
        if(item==url){
          
        this.var=true;}
    }
       
      }
     
   

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tv1Page');
  }
  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  AddToFavourites(item){
    console.log(item.Image);
    
 this.dataExists(item.Image) ;
    if (firebase.auth().currentUser!=null){

      if(this.var==true){

        let toast = this.toastCtrl.create({
          message: 'Le produit existe déja ',
          duration: 1200
        });
        toast.present();
        this.var=false ;
       
      }

      else{
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
