import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { readGaia } from '../readGaia/readGaia';
// import { evalAriketak } from '../evalAriketak/evalAriketak';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

let allData;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  dataBase: object;
  gaiak: Array<Object>;
  lessonPassed: number[] = [];

  constructor(public navCtrl: NavController,
    public http: Http,
    public loadingCtrl: LoadingController,
    public storage: Storage
  ) {
    this.storage.get('lessonPassed').then(val => {
      if (val) {
        this.lessonPassed = JSON.parse(val);
      }
    });
    let loader = this.loadingCtrl.create({
      content: 'Cargando...'
    });
    loader.present();
    this.navCtrl = navCtrl;
    this.storage = storage;
    http.get("https://raw.githubusercontent.com/litospayaso/bagoaz/master/src/assets/database/bagoaz-export.json").map(res => res.json()).subscribe(response => {
      this.dataBase = response;
      allData = response;
      this.storage.set('allData', JSON.stringify(allData));
      console.info(this.dataBase);
      this.gaiak = response.gaiak;
      loader.dismiss();
      // this.navCtrl.push(evalAriketak,{gaia:36});
    }, err => {
      storage.get('allData').then((val) => {
        if (val) {
          let response = JSON.parse(val);
          this.dataBase = response;
          allData = response;
          console.info("you don't have internet conection, running with cache.", this.dataBase);
          this.gaiak = response.gaiak;
          loader.dismiss();
          // this.navCtrl.push(evalAriketak,{gaia:36});
          // this.navCtrl.push(readGaia,{gaia:17});
        } else {
          http.get("../../assets/database/bagoaz-export.json").map(res => res.json()).subscribe(response => {
            this.dataBase = response;
            allData = response;
            console.info("you don't have internet conection, running with local json.", this.dataBase);
            this.gaiak = response.gaiak;
            loader.dismiss();
          }, err => {
            this.dataBase = undefined;
            loader.dismiss();
          });
        }
      });
    });

  }
  clickGaia(e) {
    this.navCtrl.push(readGaia, { gaia: e });
  }
  completeClass(e) {
    if (this.lessonPassed.includes(e)) {
      return "passed"
    }
    return "none"
  }
}

export const database = () => { return allData };