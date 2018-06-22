import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ReceptionPage } from '../reception/reception';
import * as firebase from 'firebase';
import { AddShoppingPage } from '../../pages/add-shopping/add-shopping';
import {  produit } from '../../models/shopping-item/shopping-item.interface';
import { ProfilPage } from '../../pages/profil/profil';
import {  profil } from '../../models/shopping-item/profil-interface';
import { IonicPage, NavController, NavParams,Platform,AlertController,ActionSheetController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { AddPage } from '../../pages/add/add';
import { TriePage } from '../../pages/trie/trie';


@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {
  number : number = 0 ; 
  public produitList:Array<any>;
  public produit:Array<any>;

  public loadedproduitList:Array<any>;
  public produitRef:firebase.database.Reference;
  public profilRef :firebase.database.Reference;
  public profil ={}as profil;
  code : any;
  itemnumber : number ;



  
  constructor( private afDb: AngularFireDatabase,
              public actionSheetCtrl:ActionSheetController,
              public navCtrl: NavController,
              public alertCtrl: AlertController,
              public navParams: NavParams,
              public platform:Platform, public barcodeScanner:BarcodeScanner) {    
                this.produitRef = firebase.database().ref('/produits');
              // this.profilRef = firebase.database().ref('/profils/MkJ7gEuViHQEzPoT4ibV3kAykxi1' );
              this.profilRef = firebase.database().ref('/profils/'+firebase.auth().currentUser.uid );


this.produitRef.on('value', produitList => {
  let produits = [];
  produitList.forEach( produit => {
    produits.push(produit.val());
    return false;
  });

  this.produitList = produits;
  this.loadedproduitList = produits;
});

 }

 alert(message: string) {
  this.alertCtrl.create({
    title: 'Info!',
    subTitle: message,
    buttons: ['OK']
  }).present();
}

  initializeItems(): void {
  this.produitList = this.loadedproduitList;
}

getItems(searchbar) {
  // Reset items back to all of the items
  this.initializeItems();

  // set q to the value of the searchbar
  var q = searchbar.srcElement.value;


  // if the value is an empty string don't filter the items
  if (!q) {
    return;
  }

  this.produitList = this.produitList.filter((v) => {
    if(v.name && q) {
      if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    }
  });     

  console.log(q, this.produitList.length);

}
AjouterProduit(p : produit){
  this.profilRef.on('value', produitList => {
    let produits = [];
    produitList.forEach( produit => {
      produits.push(produit.val());
      return false;
    });
  
    this.produit = produits;
    
   for (var item of this.produit) {
     console.log(item.produit);
     console.log(p);
     
     
     if (item.produit.code+item.produit.name+item.produit.consommation==p.code+p.name+p.consommation)
        this.number = item.number ;
    }
  });
  console.log("number" +this.number) ;

  this.navCtrl.setRoot(AddPage, {
    number: this.number ,
    produit:p
  });

  }



selectProduit(p: produit) {
  this.actionSheetCtrl.create({
    title: `${p.name}`,
    buttons: [
      {
        text: 'Ajouter ce produit au votre profil',
        handler: () => {
          
          this.AjouterProduit(p) ;
           }
      },
     {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
        }
      }
    ]
  }).present();}

  PushToProfilePage(){
    this.navCtrl.push(ProfilPage);

  }

  
  navigateToAddShoppingPage() {
    // Navigate the user to the AddShoppingPage
    this.navCtrl.push(AddShoppingPage )/*, { id_user:firebase.auth().currentUser.phoneNumber});*/
  }

  scan(){
    if (this.platform.is('cordova')) {
      this.barcodeScanner.scan().then((barcodeData) => {this.code=barcodeData.text ; 
        this.produitList = this.produitList.filter((v) => {
          if(v.code==this.code) {
            return true;}
            else {
          return false;}
        });     
        
      });
      
    }
    
    
    }

    PushToTrie() {
       this.navCtrl.push(TriePage);
       console.log("oooooooo");
       
  
    }
    newP(){
      this.navCtrl.push(AddShoppingPage);
    }

}
