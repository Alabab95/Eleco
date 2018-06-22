import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriePage } from '../../pages/categorie/categorie';
import { ConsommationPage } from '../../pages/consommation/consommation';


@Component({
  selector: 'page-trie',
  templateUrl: 'trie.html',
})
export class TriePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  PushToCategoie() {

    this.navCtrl.push(CategoriePage);

  }

  PushToConsommation(){
    this.navCtrl.push(ConsommationPage);

  }
}
