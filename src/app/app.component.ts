import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { DatabaseService } from './services/databaseService';
import { HomePage } from '../pages/home/home';
import { ariketak } from '../pages/ariketak/ariketak';
import { bilatzaile } from '../pages/bilatzaile/bilatzaile';
import { hiztegiak } from '../pages/hiztegiak/hiztegiak';
import { about } from '../pages/about/about';

@Component({
  templateUrl: 'app.html',
  // providers: [DatabaseService]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, icon:string, color:string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Gaiak (Lecciones)', icon:'book', color:'#10c1f3', component: HomePage},
      { title: 'Ariketak (Ejercicios)', icon:'create', color:'#ffc900', component: ariketak },
      { title: 'Bilatzaile (Buscador)', icon:'search', color:'#f53d3d', component: bilatzaile },
      { title: 'Hiztegiak (Diccionario)', icon:'bookmarks', color:'#33cd5e', component: hiztegiak },
      { title: 'Laguntza (Acerca de)', icon:'help', color:'#886aea', component: about }//#33cd5e
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    }).catch(e=>console.error(e));
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
