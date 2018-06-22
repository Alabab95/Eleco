import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from '../providers/auth.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { HttpModule } from '@angular/http';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot';
import { ChartsModule } from 'ng2-charts';
import { AngularFireDatabase } from 'angularfire2/database';




/////////////////////////////////////////////////
import { MyApp } from './app.component';
import { ProductListPage } from '../pages/Product-list/Product-list';
import { VprofilPage } from '../pages/vprofil/vprofil';


import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { AddShoppingPage } from '../pages/add-shopping/add-shopping';
import { EditShoppingItemPage } from '../pages/edit-shopping-item/edit-shopping-item';
import { HomePagePage } from '../pages/home-page/home-page';
import { AboutUsPage } from '../pages/about-us/about-us';
import { CloudTabDefaultPagePage } from '../pages/cloud-tab-default-page/cloud-tab-default-page';
import { LesProduitsRecommandSPage } from '../pages/les-produits-recommand-s/les-produits-recommand-s';
import { StatistiquePage } from '../pages/statistique/statistique';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { ReceptionPage } from '../pages/reception/reception';
import { GererProfilPage } from '../pages/gerer-profil/gerer-profil';
import { ResetpasswordPage } from '../pages/resetpassword/resetpassword';
import { ForgotPassPage } from '../pages/forgot-pass/forgot-pass';
import { ListProfilProvider } from '../providers/list-profil/list-profil';
import { ProduitProvider } from '../providers/produit/produit';
import { ProfilPage } from '../pages/profil/profil';
import { CalculPage } from '../pages/calcul/calcul';
import { ScanPage } from '../pages/scan/scan';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { RecalculPage } from '../pages/recalcul/recalcul';
import { AddPage } from '../pages/add/add';
import { IndexPage } from '../pages/index/index';


////////////////////////////
import { TriePage } from '../pages/trie/trie';
//////
import { CategoriePage } from '../pages/categorie/categorie';

import { AmpoulesPage } from '../pages/ampoules/ampoules';
import { ElectromenagerPage } from '../pages/electromenager/electromenager';
import { InformatiquePage } from '../pages/informatique/informatique';
import { AutresPage } from '../pages/autres/autres';
import { TeleviseurPage } from '../pages/televiseur/televiseur';

///////
import { ConsommationPage } from '../pages/consommation/consommation';

import { ClassAPage } from '../pages/class-a/class-a';
import { ClassBPage } from '../pages/class-b/class-b';
import { ClassCPage } from '../pages/class-c/class-c';
import { ClassDPage } from '../pages/class-d/class-d';
import { ClassEPage } from '../pages/class-e/class-e';

///////////////////////////////
import { TvPage } from '../pages/tv/tv';
import { InfoPage } from '../pages/info/info';
import { ElecPage } from '../pages/elec/elec';
import { LampPage } from '../pages/lamp/lamp';
import { Tv1Page } from '../pages/tv1/tv1';
import { RecommandationPage } from '../pages/recommandation/recommandation';

import { Taille70100CmPage } from '../pages/taille70100cm/taille70100cm';
import { TailleSupRieure100CmPage } from '../pages/taille-sup-rieure100cm/taille-sup-rieure100cm';
import { KPage } from '../pages/k/k';
import { AspirateursPage } from '../pages/aspirateurs/aspirateurs';
import { AHublotPage } from '../pages/a-hublot/a-hublot';
import { OuvertureParLeDessusPage } from '../pages/ouverture-par-le-dessus/ouverture-par-le-dessus';
import { SCheLingePage } from '../pages/s-che-linge/s-che-linge';
import { CapsulesEtDosettesPage } from '../pages/capsules-et-dosettes/capsules-et-dosettes';
import { AutomatiquesPage } from '../pages/automatiques/automatiques';
import { Largeur45CmPoseLibrePage } from '../pages/largeur45cm-pose-libre/largeur45cm-pose-libre';
import { Largeur45CmIntGrablesPage } from '../pages/largeur45cm-int-grables/largeur45cm-int-grables';
import { Largeur60CmPoseLibrePage } from '../pages/largeur60cm-pose-libre/largeur60cm-pose-libre';



import { Pouces1720Page } from '../pages/pouces1720/pouces1720';
import { Pouces2122Page } from '../pages/pouces2122/pouces2122';
import { Pouces23Page } from '../pages/pouces23/pouces23';
import { Pouces24Page } from '../pages/pouces24/pouces24';
import { Pouces27Page } from '../pages/pouces27/pouces27';
import { MultifonctionsPage } from '../pages/multifonctions/multifonctions';
import { ImprimantesPage } from '../pages/imprimantes/imprimantes';
import { CompatiblesPage } from '../pages/compatibles/compatibles';
import { FlammesPage } from '../pages/flammes/flammes';
import { CedPage } from '../pages/ced/ced';
import { CemPage } from '../pages/cem/cem';
import { FavPage } from '../pages/fav/fav';

import { Color1_21Page } from '../pages/color1-21/color1-21';
import { ClimatiseursPage } from '../pages/climatiseurs/climatiseurs';
import { Color21_40Page } from '../pages/color21-40/color21-40';
import { Color41_80Page } from '../pages/color41-80/color41-80';
import { GoToImprCouleur1_20Page } from '../pages/go-to-impr-couleur1-20/go-to-impr-couleur1-20';
import { NoirEtBlanc41_80Page } from '../pages/noir-et-blanc41-80/noir-et-blanc41-80';
import { NoirEtBlanc21_40Page } from '../pages/noir-et-blanc21-40/noir-et-blanc21-40';
import { ToImprCouleur21_100Page } from '../pages/to-impr-couleur21-100/to-impr-couleur21-100';
import { ToNoirEtBlanc1_20Page  } from '../pages/to-noir-et-blanc1-20/to-noir-et-blanc1-20';
import { NoirEtBlancPage  } from '../pages/noir-et-blanc/noir-et-blanc';


import { Largeur45cmIntePage  } from '../pages/largeur45cm-inte/largeur45cm-inte';
import { Largeur60cmIntePage  } from '../pages/largeur60cm-inte/largeur60cm-inte';
import { Largeur45PosePage  } from '../pages/largeur45-pose/largeur45-pose';
import { Largeur60PosePage  } from '../pages/largeur60-pose/largeur60-pose';
import { TabletopPage  } from '../pages/tabletop/tabletop';
import { PorteSansCongelateurPage  } from '../pages/1-porte-sans-congelateur/1-porte-sans-congelateur';
import { PorteAvecCongelateurPage  } from '../pages/1-porte-avec-congelateur/1-porte-avec-congelateur';
import {  PortesMoisDe300LitresPage } from '../pages/portes-mois-de300-litres/portes-mois-de300-litres';
import { PortesPlusDe300LitresPage  } from '../pages/portes-plus-de300-litres/portes-plus-de300-litres';
import { CTableTopPage  } from '../pages/table-top/table-top';
import {  ArmoirePlusDe230LPage } from '../pages/armoire-plus-de230-l/armoire-plus-de230-l';
import { ArmoireMoisDe230LPage  } from '../pages/armoire-mois-de230-l/armoire-mois-de230-l';
import {  CoffrePlus230LPage } from '../pages/coffre-plus230-l/coffre-plus230-l';
import { CoffreMois230LPage  } from '../pages/coffre-mois230-l/coffre-mois230-l';


import { Gu10CompatiblesPage  } from '../pages/gu10-compatibles/gu10-compatibles';
import { ClassiqueEclerageFortPage  } from '../pages/classique-eclerage-fort/classique-eclerage-fort';
import { AutreSpotsPage  } from '../pages/autre-spots/autre-spots';
import { Gu53Page  } from '../pages/gu53/gu53';
import { AutresSpotsGu53Page  } from '../pages/autres-spots-gu53/autres-spots-gu53';








////////////////////////////////////////////////////////////
import { StataDataProvider } from '../providers/stata-data/stata-data';
import { ProfilDataProvider } from '../providers/profil-data/profil-data';
import { ProductDataProvider } from '../providers/product-data/product-data';
import { CompteurDataProvider } from '../providers/compteur-data/compteur-data';


///////////////////

import { NotifPage  } from '../pages/notif/notif';

import { RapportPage  } from '../pages/rapport/rapport';
import { InfosPage  } from '../pages/infos/infos';




@NgModule({
  declarations: [
    MyApp,
    ShoppingListPage,
    AddShoppingPage,
    EditShoppingItemPage,
    HomePagePage,
    AboutUsPage,
    CloudTabDefaultPagePage,
    LesProduitsRecommandSPage,
    StatistiquePage,
    RegisterPage,
    LoginPage,
    ReceptionPage,
    GererProfilPage,
    ResetpasswordPage, 
    ForgotPassPage,
    ProfilPage,
    CalculPage,
    ScanPage,AutreSpotsPage,
    RecalculPage,
    AddPage,InfosPage,
    IndexPage,AutresSpotsGu53Page,
    TriePage,
    CategoriePage,ConsommationPage,
    AmpoulesPage,ElectromenagerPage,InformatiquePage,AutresPage,TeleviseurPage,
    ClassAPage,ClassBPage,ClassCPage,ClassDPage,ClassEPage,
    RecommandationPage,
    TvPage,Gu53Page,
    InfoPage,RapportPage,
    ElecPage,
    LampPage,
    Tv1Page,
    Taille70100CmPage,
    TailleSupRieure100CmPage,
    KPage,NotifPage,
    AspirateursPage,
    AHublotPage,ClassiqueEclerageFortPage,
    OuvertureParLeDessusPage,
    SCheLingePage,
    CapsulesEtDosettesPage,
    AutomatiquesPage,
    Largeur45CmPoseLibrePage,
    Largeur45CmIntGrablesPage,
    Largeur60CmPoseLibrePage,ClimatiseursPage,Gu10CompatiblesPage,
    
    Pouces1720Page,Pouces2122Page,Pouces23Page,Pouces24Page,
    Pouces27Page,ImprimantesPage,MultifonctionsPage,CompatiblesPage,FlammesPage,CedPage,CemPage,FavPage,ProductListPage,VprofilPage,
    Color1_21Page,Color21_40Page,Color41_80Page,GoToImprCouleur1_20Page,NoirEtBlanc41_80Page,NoirEtBlanc21_40Page,ToImprCouleur21_100Page,ToNoirEtBlanc1_20Page,
    Largeur45cmIntePage,Largeur60cmIntePage,Largeur45PosePage,Largeur60PosePage,PorteSansCongelateurPage,PorteAvecCongelateurPage,
    PortesMoisDe300LitresPage,PortesPlusDe300LitresPage,CTableTopPage,ArmoirePlusDe230LPage,ArmoireMoisDe230LPage,CoffrePlus230LPage,CoffreMois230LPage,
   
  ],
  
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    // Initialise AngularFire with credientials from the dashboard
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    // Import the AngularFireDatabaseModule to use database interactions
    AngularFireDatabaseModule, AngularFireAuthModule,  ChartsModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ShoppingListPage,
    AddShoppingPage,
    EditShoppingItemPage,
    HomePagePage,
    AboutUsPage,
    CloudTabDefaultPagePage,
    LesProduitsRecommandSPage,
    StatistiquePage,
    RegisterPage,
    LoginPage,AutresSpotsGu53Page,
    ReceptionPage,
    GererProfilPage,
    ResetpasswordPage, 
    ForgotPassPage,
    ProfilPage,AutreSpotsPage,
    CalculPage,
    ScanPage,
    RecalculPage,InfosPage,
    AddPage,Gu53Page,
    IndexPage,ClassiqueEclerageFortPage,
    TriePage,NotifPage,
    CategoriePage,ConsommationPage,Gu10CompatiblesPage,
    AmpoulesPage,ElectromenagerPage,InformatiquePage,AutresPage,TeleviseurPage,
    ClassAPage,ClassBPage,ClassCPage,ClassDPage,ClassEPage,
    RecommandationPage,
    
    TvPage,
    InfoPage,
    ElecPage,
    LampPage,
    Tv1Page,RapportPage,
    Taille70100CmPage,
    TailleSupRieure100CmPage,
    KPage,
    AspirateursPage,
    AHublotPage,
    OuvertureParLeDessusPage,
    SCheLingePage,
    CapsulesEtDosettesPage,
    AutomatiquesPage,
    Largeur45CmPoseLibrePage,
    Largeur45CmIntGrablesPage,
  
    Pouces1720Page,
    Pouces2122Page,
    Pouces23Page,
    Pouces24Page,
    Pouces27Page,
    ImprimantesPage,
    MultifonctionsPage,
    CompatiblesPage,
    FlammesPage,
    CedPage,
    CemPage,
    FavPage,
    ProductListPage,
    VprofilPage,ClimatiseursPage,
    Color1_21Page,Color21_40Page,Color41_80Page,GoToImprCouleur1_20Page,NoirEtBlanc41_80Page,NoirEtBlanc21_40Page,ToImprCouleur21_100Page,ToNoirEtBlanc1_20Page
    ,Largeur45cmIntePage,Largeur60cmIntePage,Largeur45PosePage,Largeur60PosePage,PorteSansCongelateurPage,PorteAvecCongelateurPage,
    PortesMoisDe300LitresPage,PortesPlusDe300LitresPage,CTableTopPage,ArmoirePlusDe230LPage,ArmoireMoisDe230LPage,CoffrePlus230LPage,CoffreMois230LPage,

    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FirebaseServiceProvider, AuthService,
    ListProfilProvider,
    ProduitProvider, BarcodeScanner,
    Toast,DataServiceProvider,Hotspot,
    StataDataProvider,
    ProfilDataProvider,
    ProductDataProvider,
    CompteurDataProvider,

  ]
})
export class AppModule { }
