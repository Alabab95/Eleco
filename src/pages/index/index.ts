import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { CalculPage } from '../../pages/calcul/calcul';
import { ToastController } from 'ionic-angular';



@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  bla :any ;
  msg : any ;
  index : any ;
  verif : boolean = false ;
  public indexRef :firebase.database.Reference;
  public statRef :firebase.database.Reference;

  public indexValue:any;
  
  day : any  = new Date();
  today : any  = new Date();
  dd : any  = this.today.getDate();
  mm : any  = this.today.getMonth()+1; //January is 0!
  yyyy : any = this.today.getFullYear();

  constructor(public toastCtrl: ToastController ,private afDb: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
   // this.indexRef = firebase.database().ref('/index/MkJ7gEuViHQEzPoT4ibV3kAykxi1' );
      this.indexRef = firebase.database().ref('/index/'+firebase.auth().currentUser.uid );
      this.statRef = firebase.database().ref('/stat/'+firebase.auth().currentUser.uid );

     this.indexRef.on('value', indexList => {
      let indexs = [];
     
      indexList.forEach( index => {
        this.verif = true ;
        
        indexs.push(index.val());
        return false;
      });
      
      if ( this.verif==false) {
        indexs[0]=-1 ;
      }
      this.indexValue = indexs[0];
      
     if (this.indexValue==-1){
        this.msg="initialiser votre compteur"
      }
      else {
        if(this.indexValue!=undefined){
        this.bla = this.indexValue.index ? parseFloat(this.indexValue.index) : 0 ;
       this.msg="la valeur de l'ancien index est "+this.bla ;
      }}
    
    });

    if(this.dd<10) {
      this.dd = '0'+this.dd
  } 
  
  if(this.mm<10) {
      this.mm = '0'+this.mm
  } 
   
  
  this.today = this.mm + '/' + this.dd + '/' + this.yyyy;
  this.day = this.mm + '/' + this.dd ;

  }

  presentToast(msg : string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom '
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }



  Valider() {
    if (this.indexValue==-1) {
      if (this.index<0) {
        this.presentToast("index negatif ? c'est impossible") ;
      }
      else {

        this.statRef.push({
          date :this.day ,
         facture : 0 ,
          compteur : 0,
          nvindex : this.index
          });


      let ref = this.indexRef.push({});
    ref.set({
      date:this.today ,
     index:this.index ,
     key : ref.key
    });}

    this.navCtrl.setRoot(CalculPage);


    }
    else 
    {
      if (this.index<this.bla) {
        this.presentToast("l'index precident est superieur au l'index actuelle , verifier vos donnes") ;
      }else {

        this.statRef.push({
          date :this.day ,
         facture : 0 ,
          compteur : 0,
          nvindex : this.index
          });

          
      let ref = this.indexRef.push({});
    ref.set({
      date:this.today ,
     index:this.index ,
     key : ref.key
    });
    console.log(this.indexValue.key);
    
    //this.afDb.object('/index/MkJ7gEuViHQEzPoT4ibV3kAykxi1'+ '/'+ this.indexValue.key).remove();
    this.afDb.object('/index/'+firebase.auth().currentUser.uid + '/'+ this.indexValue.key).remove();

    this.afDb.object('/compteur/'+firebase.auth().currentUser.uid ).remove();

    this.navCtrl.setRoot(CalculPage);

    }}
    //this.afDb.object('/compteur/MkJ7gEuViHQEzPoT4ibV3kAykxi1').remove();
   
  }
  PushToCalculPage(){
    this.navCtrl.setRoot(CalculPage);
  }

}
