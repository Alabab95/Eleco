import { Component, ViewChild,Injectable, Injector } from '@angular/core';
import {  NavController, NavParams, AlertController,LoadingController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { EmailValidator } from '../../validators/email';
import { FormBuilder, Validators } from '@angular/forms';
import { AddShoppingPage } from '../add-shopping/add-shopping';
import { AngularFireDatabase } from 'angularfire2/database';
import { ShoppingListPage } from '../shopping-list/shopping-list';
import * as firebase from 'firebase';
import { ToastController } from 'ionic-angular';
import { ProductListPage } from '../Product-list/Product-list';




@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public usersRef :firebase.database.Reference;

  day : any  = new Date();
  dd : any  = this.day.getDate();
  mm : any  = this.day.getMonth()+1; //January is 0!
  public loginForm: any;
  public loading: any;
   public error: any;

	 user : any ;
  password : any ;
   cpassword : any ;




  constructor(private toastCtrl: ToastController,public navCtrl: NavController,private alertCtrl: AlertController, private fire:AngularFireAuth,
    public navParams: NavParams, public formBuilder: FormBuilder, 
    public loadingCtrl: LoadingController, private afDb: AngularFireDatabase ) {
      
      this.usersRef = firebase.database().ref('/users/' );

    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });

    if(this.dd<10) {
      this.dd = '0'+this.dd
  } 
  
  if(this.mm<10) {
      this.mm = '0'+this.mm
  } 
   
  
  this.day = this.mm + '/' + this.dd ;

   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
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

 
  registerUser() {
    if (this.user==undefined || this.password==undefined || this.cpassword==undefined)
    {
      this.presentToast("verfier vos donnes") ; 
    }
   
    else {

    
    console.log(this.user);
    console.log(this.password);
    console.log(this.cpassword);
    
    
    
    
   
    if (this.password!=this.cpassword) {
      console.log(this.password);
      console.log(this.cpassword);
      this.presentToast("mot de passe et confirmation ne sont pas confondu!");}
      if (this.password==this.cpassword) {
        this.usersRef.push({
          email: this.user ,
          date : this.day
        });
    this.fire.auth.createUserWithEmailAndPassword(this.user , this.password)
    .then(data => {
      console.log('got data ', data);
      this.presentToast('Registered!');
      
     this.navCtrl.setRoot(ProductListPage , 
        {
          id:this.user
        });

    })
    .catch(error => {
      console.log('got an error ', error);
      this.presentToast(error.message);
    });
    
    return true;
  }}
  }

}