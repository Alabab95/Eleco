import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { IndexPage } from '../../pages/index/index';
import { ReceptionPage } from '../../pages/reception/reception';



@Component({
  selector: 'page-calcul',
  templateUrl: 'calcul.html',
})
export class CalculPage {
  KWP: number ;
  co : number ;
  cr : number ;
  red_fixes : number=4 ;
  tva : number =12/100;
  mtv : number =2.740 ;
  compteur: any ;
  f: number ;
  mtaxes : string ;
  mfacture : string ;
  taxes: any ;
  facturet: any ;
  facture: any ;
  credit : any ;
  cal : any ;
  ////////////////////////////////////////////////////////////


  today : any  = new Date();
  dd : any  = this.today.getDate();
  mm : any  = this.today.getMonth()+1; //January is 0!
  yyyy : any = this.today.getFullYear();
  last : any ;
  chaked : boolean = false ;
  v : boolean =true;
  u : boolean =true;
  index : any ;
  statutcompteur : string = "nothing" ;
////////////////////////////////////////////
verif : boolean = false ;
a: Array<any>;;
bla :any ;
test : boolean = false ;
public compteurRef :firebase.database.Reference;
public indexRef :firebase.database.Reference;
public statRef :firebase.database.Reference;
public comparisonRef :firebase.database.Reference;
public profilRef :firebase.database.Reference;


public indexValue:any;
private creaditd : boolean ;
private compteurd : boolean  ;
variable : boolean = false ;
msg : string ;
blabla : any ;
buttonmsg: any ;
msgindex : any ;
first : boolean = false ;
CPtotal : number = 1;
Ctotal : number = 1;
debut : any ;
fin : any ;
NBjours : number=0 ;
key : any ;
si : boolean= false ;
day : any  = new Date();

  constructor(public alertCtrl: AlertController,
              public navCtrl: NavController, 
              public navParams: NavParams, 
              private afDb: AngularFireDatabase, 
              private fire:AngularFireAuth) 
              {  this.creaditd = false ;
                this.compteurd= false ;


             /* this.compteurRef = firebase.database().ref('/compteur/n8CpBRj0IQgi283naowAAYYQ74h2' );
              this.indexRef = firebase.database().ref('/index/n8CpBRj0IQgi283naowAAYYQ74h2' );
              this.statRef = firebase.database().ref('/stat/n8CpBRj0IQgi283naowAAYYQ74h2' );
             this.profilRef = firebase.database().ref('/profils/n8CpBRj0IQgi283naowAAYYQ74h2' );*/
             this.comparisonRef = firebase.database().ref('/comparison' );

             this.indexRef = firebase.database().ref('/index/'+firebase.auth().currentUser.uid );
             this.compteurRef = firebase.database().ref('/compteur/'+firebase.auth().currentUser.uid );
             this.statRef = firebase.database().ref('/stat/'+firebase.auth().currentUser.uid );
             this.profilRef = firebase.database().ref('/profil/'+firebase.auth().currentUser.uid );

              this.compteurRef.on('value', produitList => {
  
                let produits = [];
                produitList.forEach( produit => {
                  this.test=true ;
                  this.variable=true ;
                  
                  produits.push(produit.val());
                  return false;
                });
                this.last=produits[produits.length-1] ;
                if(this.last!=undefined){
                  this.variable=true ;

                this.blabla = this.last.nvindex ? parseFloat(this.last.nvindex) : 0 ;
                this.msg = "votre deriere mesure est " + (this.blabla).toString()+ " KW" ;}
              });

              console.log(this.test);

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
                console.log(this.indexValue);
                
               if (this.indexValue==-1){
                 this.msgindex="Initialiser";
                this.index="Entrer votre index"
                this.variable=true ;
                this.compteurd=true ;
                this.first=true ;
               
               }
                else {
                  this.compteurd=false ;
                
                 if(this.indexValue!=undefined){
                 
                  this.bla = this.indexValue.index ? parseFloat(this.indexValue.index) : 0 ;
                  this.msgindex="Changer";

                  this.index="Votre index actuelle est "+this.bla+" KW"  ;
              }}
              
              });
              console.log(this.bla);
              
           

    if(this.dd<10) {
      this.dd = '0'+this.dd
  } 
  
  if(this.mm<10) {
      this.mm = '0'+this.mm
  } 
   
  
  this.today = this.mm + '/' + this.dd + '/' + this.yyyy;
  this.day= this.mm + '/' + this.dd  ;
  this.profilRef.on('value', produitList => {
    produitList.forEach( produit => {
      
     this.CPtotal=this.CPtotal+ Number(produit.val().produit.consommation);
      
      return false ;
    });});


  this.statRef.on('value', produitList => {
    let produits = [];
    produitList.forEach( produit => { 
      produits.push(produit.val());
      this.Ctotal=this.Ctotal+ Number(produit.val().compteur) ;
      
      return false ;
    });

    this.fin=produits[produits.length-1] ;
    this.debut=produits[0];
    if(this.fin!=undefined && this.debut!=undefined){
      let Dated = new Date(this.debut.date);
      let Datef = new Date(this.fin.date);
      console.log(((Datef).getTime()-(Dated).getTime())+1);
      
      this.NBjours=Number( ( ( (Datef).getTime()-(Dated).getTime())/(1000*60*60*24) ) );

     
     

       }

       this.comparisonRef.on('value', produitList => {
        produitList.forEach( produit => {
          if(produit!=undefined){
         if(produit.val().Cuser==  firebase.auth().currentUser.uid){
          this.si = true ;
  
         this.key=produit.val().key ;
          }
          }
          return false 
       
        });
      
      });
      
  
  });


 
  }


  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  comparison () {
  
   
    console.log(this.Ctotal);
    console.log(this.CPtotal);
    console.log(this.NBjours);
    if (this.si=true) {

      this.afDb.object('/comparison/'+ this.key).remove();

    }
    if (this.NBjours==0) {
      this.NBjours=1 ;
    }
   
  console.log( this.Ctotal/(this.CPtotal*this.NBjours));
  
    let ref =this.comparisonRef.push({});
    ref.set({
      Cuser : firebase.auth().currentUser.uid ,
      rapport : this.Ctotal/(this.CPtotal*this.NBjours) ,
      key :ref.key,
    });

  }

  calcul() {
    if (this.first==true ){
      this.alert("entrer votre index !")
    } 
    else {
      this.comparison() ;
    

    this.co = this.compteur ? parseFloat(this.compteur) : -1 ;
    this.cr = this.credit ? parseFloat(this.credit) : 0 ;
   if (0< this.co && this.co > 50 ) {this.KWP=0.075}  
   else if (51< this.co && this.co > 100 ) {this.KWP=0.108} 
   else if (101< this.co && this.co > 200 ) {this.KWP=0.162} 
   else if (201< this.co && this.co > 300 ) {this.KWP=0.198} 
   else if (301< this.co && this.co > 500 ) {this.KWP=0.285} 
   else {this.KWP=0.350} ;

  /*  this.taxes =this.mtv+this.red_fixes+(this.compteur*this.KWP*this.tva);
    this.facturet= Number ((this.co-this.bla)*this.KWP+this.cr) ;
    this.facture=Number(this.facturet)+Number(this.taxes)+Number(this.cr) ;*/
    
    if (this.test==false) {
      console.log("cas1");
       
      if ((this.co-this.bla)<0) {
        console.log(this.bla);
        
        this.alert("verifier vos donnes") ;
      }
      else {
      this.taxes =this.mtv+this.red_fixes+((this.co-this.bla)*this.KWP*this.tva);
      this.facturet= Number ((this.co-this.bla)*this.KWP+this.cr) ;
      this.facture=Number(this.facturet)+Number(this.taxes)+Number(this.cr) ;
      
      //this.mtaxes = "les Taxes totals : " + this.taxes + " "+"dt";
      if(this.indexValue!=undefined){
       
        
      this.mtaxes = "Votre consommation entre "+ this.indexValue.date +" et "+ this.today +" est "  + (Number(this.co)-Number (this.indexValue.index)).toString()+"KW ("+this.facture.toString()+ " dinar)" ;
      }
      this.mfacture = "Facture finale: " + this.facture+ " "+"dt" ;

      this.statRef.push({
        date :this.day ,
        facture : this.facture ,
        compteur :this.co-this.bla,
        nvindex : this.co
         
        });

      this.compteurRef.push({
        date :this.today ,
        facture : this.facture ,
        compteur :this.co-this.bla,
        nvindex : this.co
         
        });
  
      }}
    
      else 
      if (this.test==true) {
        this.taxes =this.mtv+this.red_fixes+((this.co-this.bla)*this.KWP*this.tva);
      this.facturet= Number ((this.co-this.bla)*this.KWP+this.cr) ;
      this.facture=Number(this.facturet)+Number(this.taxes)+Number(this.cr) ;
        console.log("cas2");
       
                 this.variable=true ;
                 console.log(this.last);
                 if (this.last!=undefined){
                
                if(this.co -this.last.compteur<0){this.alert("verifier vos donner !") ;}
                 else 
                 {  
        this.mtaxes = "Votre consommation entre "+ this.last.date +" et "+ this.today +" est "  + (Number(this.co)-Number (this.last.nvindex)).toString()+"KW ("+((Number(this.co)-Number (this.last.nvindex))*this.KWP).toString()+ " dinar)" ;
           
        this.mfacture = "Facture finale: " + this.facture+ " "+"dt" ;}

        console.log("hello");
        if(this.co-Number(this.last.nvindex)<0) {
          if(this.co>0)
          this.alert("verifier le valeur du compteur") ;
        }
        else {
          this.statRef.push({
            date :this.day ,
           facture : this.facture ,
            compteur : this.co-Number(this.last.nvindex),
            nvindex : this.co
            });

       this.compteurRef.push({
          date :this.today ,
         facture : this.facture ,
          compteur : this.co-Number(this.last.nvindex),
          nvindex : this.co
          });
        }}
        }

        else 
        this.alert("entrer votre index!") ;
    
  }  
}

  ChangerIndex() {
    this.msg="" ;


    this.navCtrl.setRoot(IndexPage);
  }

  PushToReceptionPage() {

    this.navCtrl.setRoot(ReceptionPage);
  }
}
