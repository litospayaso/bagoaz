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
  audio: string;
  response: string;
  isCorrecting:string;
  completePercent:string;
  evaluationClass:string;
  totalAriketak:number;
  zorionak:boolean = false;
  mediaIcon:string = "play";

  constructor(public navCtrl: NavController,
    public navParams: NavParams
  ) {
    let lesson = navParams.get('gaia') - 1 ;
    this.izenburu = database().gaiak[lesson].izenburu;
    this.ariketakList = database().ariketak[lesson];
    this.completePercent = "0";
    this.totalAriketak = this.ariketakList.length;
    this.setCurrent();
  }

  setCurrent() {
    this.current = this.ariketakList.sort(() => {return Math.random() - 0.5}).pop();
    console.info('current', this.current);
    if (this.current.audio) {
      this.text = null;
      this.audio = "https://raw.githubusercontent.com/litospayaso/bagoaz-ionic/master/www/database/audios/"+ this.current.audio +".mp3";
    } else {
      this.audio = null;
      this.text = this.current;
    }
  }

  zuzendu() {
    if(this.compareStrings(this.response===undefined ? '' : this.response,this.current.erantzun)){
      this.isCorrecting = ["Oso ondo! ","Zuzen! ","Egoki! "].sort(function() {return Math.random() - 0.5}).pop();
      this.evaluationClass="zuzen";
      this.completePercent=((this.totalAriketak - this.ariketakList.length) * 100 / this.totalAriketak) + "%";
    }else{
      this.isCorrecting = "Akats: " + this.current.erantzun
      this.evaluationClass="akats";
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
    }else{
      this.zorionak=true;
    }
  }

  playMedia(){
    this.mediaIcon = "pause";
    let audioTag = document.getElementById('audioTag'); 
    console.info("jejej",window.document.getElementById('audioTag'));
    // audioTag.play().done(()=>{this.mediaIcon = "play"});
    // (window.document.getElementById('audioTag').paused && document.getElementById('audioTag').currentTime > 0) ? document.getElementById('audioTag').play() : document.getElementById('audioTag').pause()
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
