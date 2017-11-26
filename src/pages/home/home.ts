import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Http } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { readGaia } from '../readGaia/readGaia';
import 'rxjs/add/operator/map';

// import { DatabaseService } from '../../app/services/databaseService';

let allData;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  dataBase:object;
  gaiak:Array<Object>;

  // getDatabase(){
  //   return this.dataBase;
  // }

  constructor(public navCtrl: NavController,
    public http: Http,
    public loadingCtrl: LoadingController,
  ) {
    let loader = this.loadingCtrl.create({
      content:'Cargando...'
    });
    loader.present();
    this.navCtrl = navCtrl;
    http.get("https://raw.githubusercontent.com/litospayaso/bagoaz-ionic/master/www/database/bagoaz-export.json").map(res => res.json()).subscribe(response => {
      this.dataBase = response;
      allData = response;
      console.info(this.dataBase);
      this.gaiak = response.gaiak;
      loader.dismiss();
    },err => {
      loader.dismiss();
    });

  }
  clickGaia(e){
    this.navCtrl.push(readGaia,{gaia:e});
  }
}

export const database = ()=>{return allData};