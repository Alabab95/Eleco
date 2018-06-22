import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-rapport',
  templateUrl: 'rapport.html',
})


export class RapportPage {
    msgrapport : any ;
    public rapportRef :firebase.database.Reference;
    items : Observable<any>;
    test : boolean = false ;
  today : any  = new Date();
  dd : any  = this.today.getDate();
  mm : any  = this.today.getMonth()+1; //January is 0!
  yyyy : any = this.today.getFullYear();
  user : any ;
  item: any ;

  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams,afdb : AngularFireDatabase) {
    this.items = afdb.list('/rapports').valueChanges();
    if (this.msgrapport==undefined)
    {
      this.msgrapport=='' ;
    }
     
    this.rapportRef = firebase.database().ref('/rapports' );
    this.user=firebase.auth().currentUser.uid ;

    this.rapportRef.on('value', rapportList => {
  
      let rapports = [];
      rapportList.forEach( rapport => {
      
      

        return false;
      });



    });


    if(this.dd<10) {
      this.dd = '0'+this.dd
  } 
  
  if(this.mm<10) {
      this.mm = '0'+this.mm
  } 
   
  
  this.today = this.mm + '/' + this.dd + '/' + this.yyyy;

   console.log(this.item);
   

  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'votre message a été envoyé ',
      duration: 3000
    });
    toast.present();
  }
  return(){
    this.navCtrl.pop() ;
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 20000);
  }



  Send(){
    let ref =this.rapportRef.push({});
    ref.set({
      rapport : this.msgrapport ,
      user :firebase.auth().currentUser.uid ,
      verif:false ,
      reponse :"",
      key :ref.key,
      date:this.today 
    });
    this.presentToast() ;

  }


  }

