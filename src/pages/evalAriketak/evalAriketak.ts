import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { database } from '../home/home';
import 'rxjs/add/operator/map';

@Component({
  selector: 'evalAriketak',
  templateUrl: 'evalAriketak.html'
})
export class evalAriketak {
  gaia: string;
  izenburu: string;
  ariketakList: Array<Object>;
  current: any;
  text: object;
  audio: object;
  response: string;
  isCorrecting:string;
  completePercent:string;
  

  constructor(public navCtrl: NavController,
    public navParams: NavParams
  ) {
    let lesson = navParams.get('gaia') - 1 ;
    this.izenburu = database().gaiak[lesson].izenburu;
    this.ariketakList = database().ariketak[lesson];
    this.completePercent = "0";
    this.setCurrent();
  }

  setCurrent() {
    this.current = this.ariketakList.sort(() => {return Math.random() - 0.5}).pop();
    console.info('current', this.current);
    if (this.current.audio) {
      this.text = null;
      this.audio = this.current;
    } else {
      this.audio = null;
      this.text = this.current;
    }
  }

  zuzendu() {
    if(this.compareStrings(this.response===undefined ? '' : this.response,this.current.erantzun)){
      this.isCorrecting = ["Oso ondo! ","Zuzen! ","Egoki! "].sort(function() {return Math.random() - 0.5}).pop();
    }else{
      this.isCorrecting = "Akats: " + this.current.erantzun
    }
  }

  jarraitu() {
    if(!this.compareStrings(this.response===undefined ? '' : this.response,this.current.erantzun)){
      this.ariketakList.push(this.current);
    }
    if(this.ariketakList.length>0){
      this.isCorrecting=null;
      this.response="";
      this.setCurrent();
    }
  }

  compareStrings(str1, str2) {
    let answer = str1,
      solution = str2;
    if (answer === solution) {
      return true;
    }//removing punctuation marks:
    answer = answer.replace(/[?=]|[¿=]|[!=]|[¡=]/gi, "").replace(/[, ]|[. ]/gi, " ").replace(/[,]|[.]/gi, " ").replace(/^(\s*)|(\s*)$/g, '').replace(/\s+/g, ' ');
    solution = solution.replace(/[?=]|[¿=]|[!=]|[¡=]/gi, "").replace(/[, ]|[. ]/gi, " ").replace(/[,]|[.]/gi, " ").replace(/^(\s*)|(\s*)$/g, '').replace(/\s+/g, ' ');
    if (answer === solution) {
      return true;
    }//removing capital letters:
    answer = answer.toLowerCase();
    solution = solution.toLowerCase();
    if (answer === solution) {
      return true;
    }//removing accent mark
    answer = answer.replace(/á/g, "a").replace(/é/g, "e").replace(/í/g, "i").replace(/ó/g, "o").replace(/ú/g, "u");
    solution = solution.replace(/á/g, "a").replace(/é/g, "e").replace(/í/g, "i").replace(/ó/g, "o").replace(/ú/g, "u");
    if (answer === solution) {
      return true;
    }//removing white spaces at the beginning and at the end:
    answer = answer.trim();
    solution = solution.trim();
    if (answer === solution) {
      return true;
    }//the answer is wrong
    return false;
  }
}
