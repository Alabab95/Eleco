import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';
import { IonicPage, NavController, NavParams,ActionSheetController } from 'ionic-angular';
import { EditShoppingItemPage } from '../../pages/edit-shopping-item/edit-shopping-item';

@Injectable()
export class ListProfilProvider {
  shoppingItemRef: any;
/*  shoppingItem = {} as profil;
  constructor(
    private actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: AngularFireDatabase) {
    
     // Capture the shoppingItemId as a NavParameter
    const shoppingItemId = this.navParams.get('shoppingItemId');

    

    // Set the scope of our Firebase Object equal to our selected item
    this.shoppingItemRef = this.database.object(`shopping-list/${shoppingItemId}`).valueChanges();

    this.shoppingItemRef.subscribe(data => {
      this.shoppingItem = data;
    });
  }

  select(shoppingItem: profil) {
    this.actionSheetCtrl.create({
      title: "profil",
      buttons: [
        {
          text: 'Edit',
          handler: () => {
            // Send the user to the EditShoppingItemPage and pass the key as a parameter
            this.navCtrl.push(EditShoppingItemPage,
              { shoppingItemId: shoppingItem.$key });
            
         
          }
        },
       
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("The user has selected the cancel button");
          }
        }
      ]
    }).present();
  }

*/

}
