import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { readGaia } from '../readGaia/readGaia';
import { database } from '../home/home';

// import { DatabaseService } from '../../app/services/databaseService';

@Component({
  selector: 'bilatzaile',
  templateUrl: 'bilatzaile.html'
})
export class bilatzaile {
  hizta:string;
  gaiak:Array<Object> = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }
  bilatzaile(){
    const allGaiak = database().gaiak;
    this.gaiak=[];
    allGaiak.forEach(element => {
      if(element.gaia.toLowerCase().includes(this.hizta.toLowerCase())){
        this.gaiak.push(element);
      }
    });
  }
  clickGaia(e){
    this.navCtrl.push(readGaia,{gaia:e,hizta:this.hizta});
  }
}
