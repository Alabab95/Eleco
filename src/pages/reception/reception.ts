import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalculPage } from '../calcul/calcul';
import { ProfilPage } from '../profil/profil';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { RecalculPage } from '../recalcul/recalcul';
import { StatistiquePage } from '../statistique/statistique';
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular';
import { HomePagePage } from '../home-page/home-page';
import { NotifPage } from '../notif/notif';

import { RecommandationPage } from '../recommandation/recommandation';
import { FavPage } from '../fav/fav';
import { RapportPage  } from '../rapport/rapport';
import { InfosPage  } from '../infos/infos';


@Component({
  selector: 'page-reception',
  templateUrl: 'reception.html'
})
export class ReceptionPage {

  aRoot = RecommandationPage;
  bRoot = CalculPage;
  cRoot= ProfilPage;
  dRoot = FavPage;
  public categorie:any[] = [] ;
  public Labels:any[] = [] ;
  public Data:any []= [] ;
  public test : boolean = false  ;
  public data:number[] ;
  public indexRef :firebase.database.Reference;
  public comparisonRef :firebase.database.Reference;
  public calculRef :firebase.database.Reference;
  public favRef :firebase.database.Reference;

  public profilRef :firebase.database.Reference;
  public statRef :firebase.database.Reference;
  verif : boolean = false ;
  indexValue : any ;
 public  bla : any ;
 public indexv :number = 10 
 ////////////////////////
 public tele : number = 0 ;
 public ampoules : number = 0 ;
 public informatique : number = 0 ;
 public autres : number = 0 ;
 public electromenager : number = 0 ;
 ////////////////////////
 max : number = 0 ;
 min : number = 100000000000 ;
 curr : number=0 ;
 count: Observable<{}[]>;

 email : any ;
 nbproduit : number = 0;
 nbfav : number = 0 ;
 nbcalcul: number = 0 ;
 


  constructor(public alertCtrl: AlertController,public navCtrl: NavController,private afDb: AngularFireDatabase,private fire:AngularFireAuth) {
    this.indexRef = firebase.database().ref('/index/'+firebase.auth().currentUser.uid );
    this.statRef = firebase.database().ref('/stat/'+firebase.auth().currentUser.uid );
    this.profilRef = firebase.database().ref('/profils/'+firebase.auth().currentUser.uid );
    this.calculRef = firebase.database().ref('/compteur/'+firebase.auth().currentUser.uid );
    this.favRef = firebase.database().ref('Favourites/'+firebase.auth().currentUser.uid );

    this.count = afDb.list('Favourites/'+firebase.auth().currentUser.uid).valueChanges();

   
     this.comparisonRef = firebase.database().ref('/comparison' );

    
     this.statRef.on('value', produitList => {
       console.log(firebase.auth().currentUser.uid);
       
       let produits = [];
       produitList.forEach( produit => {

         this.nbcalcul = this.nbcalcul +1 ;
         console.log("data :" + produit.val().compteur);

         this.test=true ;
         this.Data.push(produit.val().compteur);
         this.Labels.push(produit.val().date);
        

         return false;
       });
       
     
     });


     this.profilRef.on('value', produitList => {
       let produits = [];
       produitList.forEach( produit => {
         this.nbproduit=this.nbproduit + produit.val().number ;
         console.log("nbproduit" + this.nbproduit);
         

        if(produit.val().produit.categorie==" Informatique")
          { this.informatique=this.informatique+(produit.val().produit.consommation*produit.val().number) ;
           console.log("yaeeeeeee");}
           

       else if(produit.val().produit.categorie=="Ampoules")
       this.ampoules=this.ampoules+(produit.val().produit.consommation*produit.val().number) ; 
       
       else if(produit.val().produit.categorie=="Électroménager"){
       this.electromenager=this.electromenager+(produit.val().produit.consommation*produit.val().number) ;
       console.log(produit.val());
       }
       else if(produit.val().produit.categorie=="Autres")
       this.autres=this.autres+(produit.val().produit.consommation*produit.val().number) ;

       else  {
       this.tele=this.tele+(produit.val().produit.consommation*produit.val().number) ;
       console.log("oui");
       }

      

         return false;
       });
       
     
     });
    
     this.comparisonRef.on('value', produitList => {
       produitList.forEach( produit => {
         if(produit!=undefined){
           if (Number(produit.val().rapport)<this.min && Number(produit.val().rapport) >1 )
           this.min=Number (produit.val().rapport) ;
           if (Number(produit.val().rapport)>this.max)
           this.max=Number (produit.val().rapport) ;
           if(produit.val().Cuser==firebase.auth().currentUser.uid)
           this.curr=Number (produit.val().rapport) ;
         }
         return false 
      
       });
     
     });
     
this.email=firebase.auth().currentUser.email ;



  }
  pushToProfilPage(){
    this.navCtrl.push(ProfilPage);
  }

  pushToCalculPage(){
   
       this.navCtrl.push(CalculPage);
    
 }
 rec(){
   this.navCtrl.push(RecommandationPage);
 }
 fav(){
   this.navCtrl.push(FavPage);
 }
 


pushToStatPage(){

  if (this.Data.length>3) {
    this.Data=[ this.Data[this.Data.length-3],this.Data[this.Data.length-2],this.Data[this.Data.length-1]] ;
    this.Labels=[ this.Labels[this.Labels.length-3],this.Labels[this.Labels.length-2],this.Labels[this.Labels.length-1]] ;
  }

  console.log(this.Data);
  
 
 
  this.navCtrl.push(StatistiquePage, {
   data : this.Data ,
   labels : this.Labels ,
   verif : this.test,
   informatique : this.informatique,
   ampoule : this.ampoules ,
   electromenager : this.electromenager ,
   autres : this.autres ,
   tele : this.tele ,
   max : this.max ,
   min : this.min ,
   curr : this.curr 
});

}
Logout(){

  firebase.auth().signOut() ;
  this.navCtrl.setRoot(HomePagePage);
  
}
GoToRapport(){

this.navCtrl.push(RapportPage);

}

showConfirm() {
  let confirm = this.alertCtrl.create({
    title: 'Supprimer tous les donnes !',
    message: 'etes vous sur de vouloir supprimer tous vos donnes ? cette atction est irreversible',
    buttons: [
      {
        text: "j'accepte",
        handler: () => {
          this.indexRef.remove() ;// = firebase.database().ref('/index/'+firebase.auth().currentUser.uid );
          this.statRef.remove() ;// = firebase.database().ref('/stat/'+firebase.auth().currentUser.uid );
          this.profilRef.remove() ;// = firebase.database().ref('/profils/'+firebase.auth().currentUser.uid );
          this.calculRef.remove() ; //= firebase.database().ref('/compteur/'+firebase.auth().currentUser.uid );
      
          this.favRef.remove() ;// = afDb.list('Favourites/'+firebase.auth().currentUser.uid).valueChanges();
          this.navCtrl.setRoot(HomePagePage);

          
        }
      },
      {
        text: "je n'accepte pas",
        handler: () => {
          console.log('Agree clicked');
        }
      }
    ]
  });
  confirm.present();
}

pushToInfoPage(){

  this.navCtrl.push(InfosPage);
  
  }

  
pushToNotifPage(){
this.navCtrl.push(NotifPage);
}



}
