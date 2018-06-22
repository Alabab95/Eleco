import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';
@Injectable()
export class ProduitProvider {
  public currentUser: string;
  public produitList: firebase.database.Reference;

  constructor() {
     this.produitList = firebase.database().ref('/produits');   
  }

  getproduitList(): firebase.database.Reference {  
    return this.produitList;
  }

 createproduit(  name: string , consommation: string,  code : string,categorie : string )  {
  let ref = this.produitList.push({});
  ref.set({
    name : name,
    consommation : consommation ,
    code : code ,
    categorie: categorie ,
    key : ref.key
  });

    
  }
  
 

}
