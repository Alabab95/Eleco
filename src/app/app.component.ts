import { StatusBar } from '@ionic-native/status-bar';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot';
import { Component , ViewChild } from '@angular/core';
import { Platform , Nav} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController } from 'ionic-angular';

import { ReceptionPage } from '../pages/reception/reception';
import { HomePagePage } from '../pages/home-page/home-page';
import { AddShoppingPage } from '../pages/add-shopping/add-shopping';
import { ProfilPage } from '../pages/profil/profil';
import { StatistiquePage } from '../pages/statistique/statistique';

import {CalculPage  } from '../pages/calcul/calcul';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { InfoPage } from '../pages/info/info';
import { ElecPage } from '../pages/elec/elec';
import { LampPage } from '../pages/lamp/lamp';
import { LoginPage } from '../pages/login/login';
import { RapportPage  } from '../pages/rapport/rapport';
import { InfosPage  } from '../pages/infos/infos';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  
  @ViewChild(Nav) navCtrl: Nav;

  rootPage:any = HomePagePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private hotspot: Hotspot) {
    platform.ready().then(() => {
      
      statusBar.styleDefault();
      splashScreen.hide();
      
    });
  }
  
  
}

