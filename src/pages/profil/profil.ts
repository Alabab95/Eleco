import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController ,ActionSheetController} from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { ReceptionPage } from '../reception/reception';
import * as firebase from 'firebase';
import { ShoppingListPage } from '../../pages/shopping-list/shopping-list';
import {  produit } from '../../models/shopping-item/shopping-item.interface';
import { EditShoppingItemPage } from '../edit-shopping-item/edit-shopping-item';
import {  profil } from '../../models/shopping-item/profil-interface';
import { isTrueProperty } from 'ionic-angular/util/util';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {
  
  public produitRef :firebase.database.Reference;

  public profilRef :firebase.database.Reference;
  public profilsList:Array<any>;
  public loadedprofilList:Array<any>;

  public profilList:Array<any>;
  produit={}as produit ;
  id :string ;
  arrData = [];
  constructor(private toastCtrl: ToastController,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams, private afDb: AngularFireDatabase,
    public actionSheetCtrl:ActionSheetController) {    

      this.profilRef = firebase.database().ref('/profils/'+firebase.auth().currentUser.uid );
     //this.profilRef = firebase.database().ref('/profils/MkJ7gEuViHQEzPoT4ibV3kAykxi1' );
      this.produitRef = firebase.database().ref('/produits');
  


      this.profilRef.on('value', profilList => {
        let profils = [];
        profilList.forEach( profil => {
         this.arrData.push(profil.val());
        profils.push(profil.val());
        
        return false;
        });
        this.profilList = profils;
        console.log(this.profilList);
        
        this.loadedprofilList = profils;
        });

    }
//selectProduit(profil)

    
  
presentToast() {
  let toast = this.toastCtrl.create({
    message: 'le produit est supprimer',
    duration: 3000
  });
  toast.present();
}

showAlert() {
  let alert = this.alertCtrl.create({
    title: "c'est impossible",
    subTitle: 'vous ne pouvez pas posseder un profil vide !',
    buttons: ['OK']
  });
  alert.present();
}



selectProduit(p: any) {
  console.log(p);
  
  this.actionSheetCtrl.create({
    title: `${p.produit.name}`,
    buttons: [
      {
        text: 'Editer',
        handler: () => {
          this.navCtrl.push(EditShoppingItemPage,
            { profil: p });
          
        
        }
      },
      {
        text: 'Supprimer',
        role: 'destructive',
        handler: () => {
         // this.afDb.object('/profils/MkJ7gEuViHQEzPoT4ibV3kAykxi1'+ '/'+ p.key).remove();
        // this.afDb.object('/profils/'+firebase.auth().currentUser.uid+ '/'+ p.key).remove();
       if(this.profilList.length==1){
                 this.showAlert() ;
       }else {
         console.log("delete");
         
        this.afDb.object('/profils/'+firebase.auth().currentUser.uid+ '/'+p.key).remove();
        this.presentToast() ;

      }
          //this.deleteProfil(p);
        }
      },
      {
        text: 'Annuler',
        role: 'cancel',
        handler: () => {
          console.log("The user has selected the cancel button");
        }
      }
    ]
  }).present();}


  PushToReceptionPage() {
    this.navCtrl.setRoot (ShoppingListPage);
  }

  PushToSearchPage(){

    this.navCtrl.push(ShoppingListPage);
  }



}
