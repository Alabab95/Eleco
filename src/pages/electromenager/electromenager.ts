import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform,AlertController,ActionSheetController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import {  produit } from '../../models/shopping-item/shopping-item.interface';
import { AddPage } from '../../pages/add/add';
import { ProfilPage } from '../../pages/profil/profil';
import { AddShoppingPage } from '../../pages/add-shopping/add-shopping';
import { ShoppingListPage } from '../../pages/shopping-list/shopping-list';


@Component({
  selector: 'page-electromenager',
  templateUrl: 'electromenager.html',
})
export class ElectromenagerPage {

  public produitList:Array<any>;
  public loadedproduitList:Array<any>;
  public produitRef:firebase.database.Reference;
  public profilRef :firebase.database.Reference;
  code : any;

  constructor(private afDb: AngularFireDatabase,
    public actionSheetCtrl:ActionSheetController,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public platform:Platform, public barcodeScanner:BarcodeScanner) {
      this.produitRef = firebase.database().ref('/produits');
      //this.profilRef = firebase.database().ref('/profils/MkJ7gEuViHQEzPoT4ibV3kAykxi1' );
      this.profilRef = firebase.database().ref('/profils/'+firebase.auth().currentUser.uid );

      this.produitRef.on('value', produitList => {
        let produits = [];
        produitList.forEach( produit => {
          if (produit.val().categorie=="Électroménager") {
          produits.push(produit.val());}
          return false;
        });
      
        this.produitList = produits;
        this.loadedproduitList = produits;
      });

  }


getItems(searchbar) {
  // Reset items back to all of the items

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
  this.navCtrl.push(AddPage, {
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
      
    }}

    PushToSearchPage() {
     
    this.navCtrl.push(ShoppingListPage);

    }

}
