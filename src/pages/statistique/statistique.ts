import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { ReceptionPage } from '../../pages/reception/reception';
import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { Component, OnInit, ViewChildren, ElementRef, QueryList, AfterViewInit } from '@angular/core';


@Component({
  selector: 'page-statistique',
  templateUrl: 'statistique.html'

})
export class StatistiquePage  {
  public lineChartLabels:Array<any>= [];
  public lineChartData:Array<any>= [];
  public Labels:any[] = [] ;
  public Data:number []= [] ;
  public test : boolean = false  ;
  public indexRef :firebase.database.Reference;
  public statRef :firebase.database.Reference;
  verif : boolean = false ;
  indexValue : any ;
 public  bla : any ;
 public indexv :number = 10  ;
 ///////////////////////////////////
public tele : number = 0 ;
public ampoules : number = 0 ;
public informatique : number = 0 ;
public autres : number = 0 ;
public electromenager : number = 0 ;
public doughnutChartLabels:string[] ;
public doughnutChartData:number[] ;
public doughnutChartType:string ;
public barChartLabels:string[] ;
public barChartType:string ;
public barChartLegend:boolean = true;
public barChartData:any[];

max : any ;
min : any ;
curr : any ;


  constructor(public alertCtrl: AlertController,
              public navCtrl: NavController, 
              public navParams: NavParams, 
              private afDb: AngularFireDatabase, 
              private fire:AngularFireAuth) {

                

          this.Labels = this.navParams.get('labels') ;
        console.log("label" +this.Labels);
          
          this.Data = this.navParams.get('data') ;
          console.log("data" +this.Data);

          this.verif = this.navParams.get('verif') ;
          console.log("verif"+this.verif);


          this.informatique=this.navParams.get('informatique') ;
          console.log("informatique" +this.informatique);

          this.ampoules=this.navParams.get('ampoule') ;
          this.autres=this.navParams.get('autres') ;
          console.log("autres"+this.autres);

          this.tele=this.navParams.get('tele') ;
          this.electromenager=this.navParams.get('electromenager') ;


          this.min=this.navParams.get('min') ;
          console.log("min" +this.min);

          this.max=this.navParams.get('max') ;
          console.log("max"+this.max);

          this.curr=this.navParams.get('curr') ;
          console.log("curr"+this.curr);


          
         this.lineChartData=[
            {data: this.Data, label: 'consommation electrique en KW'}
           ];
        this.lineChartLabels= this.Labels;

        console.log(this.tele);
        
                if (this.verif==false){
                  this.showAlert() ;
                this.navCtrl.setRoot(ReceptionPage) ;
                 }

                 this.doughnutChartLabels = ["Téléviseurs" , "Ampoules", "Électroménager" ,"Autres ", "Informatique"] ;
                 this.doughnutChartData = [this.tele , this.ampoules , this.electromenager , this.autres , this.informatique] ;
                 this.doughnutChartType= 'doughnut';
                
                ////////////////////////////////
                 this.barChartType = 'bar';
                 this. barChartData = [
                  {data: [this.max ], label: 'utilisateur gaspilleur'},
                  {data: [this.curr ], label: 'vous'},
                  {data: [this.min ], label: 'utilisateur ideal'}
                  ];
  }



  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'alert!',
      subTitle: "pas de donnes!" , 
      buttons: ['OK']
    });
    alert.present();
  }
 
 
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgb(255,255,0)',
      borderColor: 'rgb(0,0,0)',
      pointBackgroundColor: 'rgb(184,134,11)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(48,159,2,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
  
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  
  public chartHovered(e:any):void {
    console.log(e);
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  

  return(){
    this.navCtrl.pop();
  }

  
  
}

