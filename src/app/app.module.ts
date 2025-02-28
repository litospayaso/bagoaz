import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { readGaia } from '../pages/readGaia/readGaia';
import { ariketak } from '../pages/ariketak/ariketak';
import { evalAriketak } from '../pages/evalAriketak/evalAriketak';
import { bilatzaile } from '../pages/bilatzaile/bilatzaile';
import { hiztegiak } from '../pages/hiztegiak/hiztegiak';
import { about } from '../pages/about/about';

import { HiztegiakService } from '../assets/services/HiztegiakService';
import { hiztegiakView } from '../assets/components/hiztegiakView/hiztegiakView';

import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    readGaia,
    ariketak,
    evalAriketak,
    bilatzaile,
    hiztegiak,
    about,
    hiztegiakView
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicPageModule.forChild(hiztegiakView),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    readGaia,
    ariketak,
    evalAriketak,
    bilatzaile,
    hiztegiak,
    hiztegiakView,
    about
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HiztegiakService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
