import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import {  produit } from '../../models/shopping-item/shopping-item.interface';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToastController } from 'ionic-angular';
import {  ShoppingListPage } from '../../pages/shopping-list/shopping-list';

import { ProductListPage } from '../../pages/Product-list/Product-list';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  produit : any ;
  name : any ;
  categorie : any ;
  code : any ;
  consommation : any ;
  number : any ;
  public profilRef :firebase.database.Reference;
  p : any ;
  exists : boolean =false;
  public profilsList:Array<any>;
  arrData = [];
  public profilList:Array<any>; 
  PN : any ;
  msg : string  ;
  nb: string ;
  key : any ;
  n : number = 0 ;
  num : number ;



  constructor( private toastCtrl: ToastController,private afDb: AngularFireDatabase, public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
   //this.profilRef = firebase.database().ref('/profils/MkJ7gEuViHQEzPoT4ibV3kAykxi1' );
    this.profilRef = firebase.database().ref('/profils/'+firebase.auth().currentUser.uid );


    this.profilRef.on('value', profilList => {
      let profils = [];
      profilList.forEach( profil => {
       this.arrData.push(profil.val());
      profils.push(profil.val());
      
      return false;
      });
      this.profilList = profils;

     

      });
      

    this.p = this.navParams.get('produit');
    this.n = this.navParams.get('number');

    console.log(this.n);
    this.name=this.p.name;
    this.categorie=this.p.categorie;
    this.consommation=this.p.consommation;
    this.code=this.p.code;

 if (Number(this.n==0)) {

   this.msg="ce produit n'existe pas dans votre profil"
 } else if (Number(this.n)>0) {

   this.msg=" cet produit exist dans votre profil avec une quantité de "+this.n
 }



  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  presentToast(msg : string ) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }


   

  ajouterproduit() {
    this.num = this.number ? parseFloat(this.number) : 0 ;

    console.log(this.num);
    
    if (this.num<1) {

      this.alert("verifier la quantité de produit!")

    } else {
    console.log(this.profilList) ;
   for (var item of this.profilList) {

      if (item.produit.code==this.p.code){        
        this.exists=true ;
        this.PN=item.number;
        this.key=item.key;
        console.log(this.PN +"    "+ this.exists);

      }
      
  }

  if (this.exists==true) {
    
    console.log (this.key) ;

   //this.afDb.object('/profils/MkJ7gEuViHQEzPoT4ibV3kAykxi1/'+ this.key).remove();
   this.afDb.object('/profils/'+firebase.auth().currentUser.uid+ this.key ).remove();


    let ref = this.profilRef.push({});
    ref.set({
     produit:this.p ,
     key : ref.key,
     number : Number(this.num)+ Number(this.PN)  
    });

    
   // this.afDb.object('/profils/MkJ7gEuViHQEzPoT4ibV3kAykxi1'+ '/'+ this.key).remove();

    //this.navCtrl.pop();
     


  }
 else 
  {



   
     let ref = this.profilRef.push({});
     ref.set({
      number : this.num , 
      produit:this.p ,
      key : ref.key
     

  });}
 this.presentToast("l'ajout de votre produit "+this.p.name+" se fait avec succès" );
 this.navCtrl.setRoot(ProductListPage);
}}

PushToListPage(){

  this.navCtrl.setRoot(ShoppingListPage) ;
}

}
