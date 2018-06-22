import { Component ,ViewChild} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { ReceptionPage } from '../reception/reception';
import * as firebase from 'firebase';

import {  produit } from '../../models/shopping-item/shopping-item.interface';
import { ProduitProvider } from '../../providers/produit/produit';
import {  profil } from '../../models/shopping-item/profil-interface';
import { ScanPage } from '../scan/scan';
import { IonicPage, NavController, NavParams,Platform,AlertController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';

@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {
  public variable=false;
  public produitRef:firebase.database.Reference;
  selectedProduct: any;
  code : string;
  produit = {} as produit ; 
  id_user : any ;
  @ViewChild('code') codehtml;

  public profilRef :firebase.database.Reference;
  public profil ={}as profil;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public navParams: NavParams,
              public produitprovider:ProduitProvider,
              public platform:Platform, public barcodeScanner:BarcodeScanner) {  
               // this.profilRef = firebase.database().ref('/profils/MkJ7gEuViHQEzPoT4ibV3kAykxi1' );
  
                this.profilRef = firebase.database().ref('/profils/'+firebase.auth().currentUser.uid );
                this.produitRef = firebase.database().ref('/produits');
this.code="" ;


                
 }

 alert(message: string) {
  this.alertCtrl.create({
    title: 'alert!',
    subTitle: message,
    buttons: ['ok']
  }).present();
}


 ajouterproduit(p : produit){
   

  if (p.categorie!=null && p.code!=null && p.consommation!=null && p.name!=null) {

    
    
      if (this.code=="") {
     this.code=p.code ;}
   this.produitprovider.createproduit(p.name,p.consommation,this.code,p.categorie);
   
   
  this.navCtrl.pop();}
  else {

this.alert('remplir tous les champs') ;    
  }

}
scan(){
  if (this.platform.is('cordova')) {
    this.selectedProduct = {};
    this.barcodeScanner.scan().then((barcodeData) => {this.code=barcodeData.text 
      
      this.produit.code=this.code ;
    }
   
     );
       
 }
}

}