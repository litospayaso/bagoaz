import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { database } from '../home/home';
import { evalAriketak } from '../evalAriketak/evalAriketak';
import 'rxjs/add/operator/map';

// import { DatabaseService } from '../../app/services/databaseService';

@Component({
  selector: 'readGaia',
  templateUrl: 'readGaia.html'
})
export class readGaia {
  gaia:object;
  currentGaia:string;
  izenburu:string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams
  ) {
    let lesson = navParams.get('gaia')-1
    this.izenburu = database().gaiak[lesson].izenburu;
    this.gaia = database().gaiak[lesson];
    let currentGaia = database().gaiak[lesson].gaia;
    let hizta = navParams.get('hizta');
    if(hizta){
      currentGaia = currentGaia.replace(new RegExp(hizta, 'gi'),"<span class='highlight'>"+hizta+"</span>")
    }
    this.currentGaia = currentGaia;
  }
  clickAriketak(e){
    this.navCtrl.push(evalAriketak,{gaia:e});
  }
}
