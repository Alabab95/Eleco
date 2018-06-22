import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';
import { ReceptionPage } from '../reception/reception';
import * as firebase from 'firebase';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { ProduitProvider } from '../../providers/produit/produit';
import { AlertController } from 'ionic-angular';




import { produit } from './../../models/shopping-item/shopping-item.interface';

@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {
  code : string;
  name:any ;
  consommation : number ;
  c : any ; 
  number : any ; 
  test :any ;
  p : any ;
  produit = {} as produit;
  public profilRef :firebase.database.Reference;
   produitId:string ; 

  constructor(
    private alertCtrl: AlertController,
    public produitprovider:ProduitProvider,
    public platform:Platform, public barcodeScanner:BarcodeScanner,
    private afDb: AngularFireDatabase,
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: AngularFireDatabase) {
    
    
    this.p = this.navParams.get('profil');
    console.log(this.p.produit.consommation);
    this.number=this.p.number;
    this.produit.code=this.p.produit.code ;
    this.produit.categorie=this.p.produit.categorie;
    this.produit.consommation=this.p.produit.consommation;
    this.produit.name=this.p.produit.name;

   // this.profilRef = firebase.database().ref('/profils/MkJ7gEuViHQEzPoT4ibV3kAykxi1' );

    this.profilRef = firebase.database().ref('/profils/'+firebase.auth().currentUser.uid );
    
    this.code="" ;

    
  }
  presentConfirm(produit:any) {
    let alert = this.alertCtrl.create({
      title: 'Confirm alert',
      message: 'etes vous sur de vouloir modifier ce produit ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'modifier',
          handler: () => {
           this.editProduct(produit) ;
        }}
      ]
    });
    alert.present();
  }

  editProduct(produit:any) {
    if (this.code=="") {
      this.code=produit.code ;}
    this.produitprovider.createproduit(produit.name,produit.consommation,this.code,produit.categorie);
    let ref = this.profilRef.push({});
    ref.set({
     produit:produit ,
     key : ref.key,
     number : this.number
    });

    //this.afDb.object('/profils/MkJ7gEuViHQEzPoT4ibV3kAykxi1'+ '/'+ this.p.key).remove();
   this.afDb.object('/profils/'+firebase.auth().currentUser.uid+ '/'+ this.p.key).remove();

    this.navCtrl.pop();
  }



scan(){
  if (this.platform.is('cordova')) {
    this.barcodeScanner.scan().then((barcodeData) => {this.code=barcodeData.text 
      this.produit.code=this.code ;
    }
   
     );
       
 }
}
 
}
