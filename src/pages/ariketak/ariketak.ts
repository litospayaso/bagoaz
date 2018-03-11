import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { database } from '../home/home';
import { evalAriketak } from '../evalAriketak/evalAriketak';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'ariketak.html',
  styles:['ariketak.scss']
})

export class ariketak {
  gaiak:Array<Object>;
  lessonPassed: number[] = [];

  constructor(public navCtrl: NavController,
    public storage: Storage
  ) {
    this.gaiak = database().gaiak;
    this.storage.get('lessonPassed').then(val => {
      if (val) {
        this.lessonPassed = JSON.parse(val);
      }
    });
  }
  clickAriketak(e){
    this.navCtrl.push(evalAriketak,{gaia:e});
  }
  completeClass(e) {
    if (this.lessonPassed.includes(e)) {
      return "passed"
    }
    return "none"
  }
}