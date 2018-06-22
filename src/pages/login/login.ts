import { Component, ViewChild } from '@angular/core';
import {  NavController, NavParams, AlertController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ReceptionPage } from '../reception/reception';
import { RegisterPage } from '../register/register';
import { EmailValidator } from '../../validators/email';
import { ResetpasswordPage } from '../resetpassword/resetpassword';
import { ForgotPassPage } from '../forgot-pass/forgot-pass';
import { ShoppingListPage } from '../shopping-list/shopping-list';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AddShoppingPage } from '../add-shopping/add-shopping';
import { ToastController } from 'ionic-angular';





@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public usersRef :firebase.database.Reference;

  day : any  = new Date();
  dd : any  = this.day.getDate();
  mm : any  = this.day.getMonth()+1; //January is 0!
	@ViewChild('username') user;
	@ViewChild('password') password;

public annonceRef: any;
public annonceList: any;
public loadedAnnonceList: any;
 public variable=false;

  constructor(private toastCtrl: ToastController,private alertCtrl: AlertController, private fire:AngularFireAuth,public navCtrl: NavController,
    public navParams: NavParams,  private afauth:AngularFireAuth, private afDb: AngularFireDatabase) {
      
      this.usersRef = firebase.database().ref('/users/' );

      if(this.dd<10) {
        this.dd = '0'+this.dd
    } 
    
    if(this.mm<10) {
        this.mm = '0'+this.mm
    } 
     
    
    this.day = this.mm + '/' + this.dd ;
  

  }

 
  
  facebook = {
    loggedIn : false,
    name : '',
    email : '',
    profilePicture: ''
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  presentToast(msg : string ) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }


 


  EmailLogin() {
    this.fire.auth.signInWithEmailAndPassword(this.user.value , this.password.value)
    .then( data => {
      console.log('got some data', this.fire.auth.currentUser);
      this.presentToast('Success! You\'re logged in');
      this.navCtrl.setRoot(ReceptionPage  );
      // user is logged in
    })
    .catch( error => {
      console.log('got an error', error);
      this.presentToast(error.message);
    })
  	console.log('Would sign in with ', this.user.value, this.password.value);
  }

  PushToSingup(){

    this.navCtrl.push(RegisterPage);

  }
  id:string ;
  
  
initializeAnnonceItems(): void {
  this.annonceList = this.loadedAnnonceList;
}

 
  
  Facbooklogin() {
  this.afauth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
 .then(res => {
   console.log(res);
   

   // check if user exist in db
   this.afDb.list<any>('/users', ref => ref.orderByChild('email').equalTo(res.user.email)).valueChanges().subscribe(data => {
     console.log('user exist', data);
    if (data && data.length == 0) {
      this.usersRef.push({
        email: res.user.email,
        date : this.day 
      });
      this.navCtrl.push(AddShoppingPage);
    }
    else
    {      this.navCtrl.setRoot(ReceptionPage);
    }
   });
 })
 }

 

 resetPassword(){
  this.navCtrl.push(ForgotPassPage);


 }

}