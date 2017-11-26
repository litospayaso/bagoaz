import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { database } from '../home/home';
import { evalAriketak } from '../evalAriketak/evalAriketak';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'ariketak.html'
})

export class ariketak {
  gaiak:Array<Object>;
  constructor(public navCtrl: NavController
  ) {
    this.gaiak = database().gaiak;
  }
  clickAriketak(e){
    this.navCtrl.push(evalAriketak,{gaia:e});
  }
}