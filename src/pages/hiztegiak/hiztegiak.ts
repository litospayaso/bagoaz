import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';

import { HiztegiakService } from '../../assets/services/HiztegiakService';

@Component({
  selector: 'hiztegiak',
  templateUrl: 'hiztegiak.html'
})
export class hiztegiak {
  hizta:string;
  language:string = 'eu';
  result:{
    hitza:String,
    trans:Array<string>,
    examples:Array<string>,
    language:string
  };

  constructor(public hiztegiakService: HiztegiakService,
    public loadingCtrl: LoadingController,
  ) {
  }
  clickTranslate(){
    let loader = this.loadingCtrl.create({
      content:'Cargando...'
    });
    this.hiztegiakService.translate(this.hizta,this.language,(data)=>{
      loader.dismiss();
      this.result = {hitza:"hola",trans:['a','b'],examples:['aa','bb'],language:'es'}
    });
  }
}
