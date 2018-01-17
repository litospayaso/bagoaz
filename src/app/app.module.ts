import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { readGaia } from '../pages/readGaia/readGaia';
import { ariketak } from '../pages/ariketak/ariketak';
import { evalAriketak } from '../pages/evalAriketak/evalAriketak';
import { bilatzaile } from '../pages/bilatzaile/bilatzaile';
import { hiztegiak } from '../pages/hiztegiak/hiztegiak';
import { about } from '../pages/about/about';

import { HiztegiakService } from '../assets/services/HiztegiakService';

import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';// import { Storage } from '@ionic/storage';
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
    about
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
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
    about
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HiztegiakService,
    // IonicStorageModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
