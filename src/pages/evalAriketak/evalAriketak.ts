import { Component} from '@angular/core';
import { NavController, NavParams, PopoverController, ToastController } from 'ionic-angular';
import { database } from '../home/home';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';

import { hiztegiakView } from '../../assets/components/hiztegiakView/hiztegiakView';
import { HomePage } from '../home/home';

import { HiztegiakService } from '../../assets/services/HiztegiakService';
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
  lesson:number;
  zorionak:boolean = false;
  mediaIcon:string = "play";

  constructor(public navCtrl: NavController,
    public http: Http,
    public navParams: NavParams,
    public storage : Storage,
    public popoverCtrl: PopoverController,
    public hiztegiakService: HiztegiakService,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
  ) {
    this.http = http;
    this.storage = storage;
    this.lesson = navParams.get('gaia') - 1 ;
    this.izenburu = database().gaiak[this.lesson].izenburu;
    this.ariketakList = database().ariketak[this.lesson];
    this.completePercent = "0";
    this.totalAriketak = this.ariketakList.length;
    this.setCurrent();
  }

  translate(event){
    let word = event.target.innerText;
    let loader = this.loadingCtrl.create({
      content:'Cargando...'
    });
    loader.present();
    this.hiztegiakService.translate(word,(data)=>{
      let popover = this.popoverCtrl.create(hiztegiakView,{
        result:data
      });
      loader.dismiss();
      popover.present({
        ev: event
      });
    });
  }

  setCurrent() {
    if(this.ariketakList.length===0){
      this.lessonComplete();
    }
    this.current = this.ariketakList.sort(() => {return Math.random() - 0.5}).pop();
    console.info('current', this.current);
    if (this.current.audio) {
      this.text = null;
      this.audio = `https://raw.githubusercontent.com/litospayaso/bagoaz/master/src/assets/database/audios/${this.current.audio}.mp3`;
      let audioTag = <HTMLAudioElement> document.getElementById('audioTag');
      audioTag ? audioTag.load() : '';
        this.http.get(this.audio).subscribe(null,err=>{//en caso de error se salta el ejercicio de audio.
        let toast = this.toastCtrl.create({
          message: 'Es necesario tener conexión a internet para poder hacer ejercicios de audio.',
          duration: 3000
        });
        toast.present();
        this.setCurrent();
      });
    } else {
      this.audio = null;
      if(typeof(this.current.euskara)==="string"){//si ha fallado anteriormente ya habriamos hecho la conversion a array
        this.current.euskara = this.current.euskara.split(" ");
      }
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
      this.lessonComplete();
    }
  }

  lessonComplete(){
    this.zorionak=true;
    this.completePercent="100%";
    this.storage.get('lessonPassed').then((val) => {
      let cookie;
      if(val){
        cookie = JSON.parse(val);
      }else{
        cookie = [];
      }
      cookie.push(this.lesson);
      this.storage.set("lessonPassed",JSON.stringify(cookie));
    }).catch(e=>console.error(e));
  }

  playMedia(){
    let audioTag = <HTMLAudioElement> document.getElementById('audioTag');
    audioTag.load()
  }

  onKeyPress(event){
    if(event.keyCode === 13){
      if(this.isCorrecting){
        this.jarraitu()
      }else{
        this.zuzendu();
      }
    }
  }

  comeBackToGaiak(){
    this.navCtrl.setRoot(HomePage);
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
    }//removing accent mark:
    answer = answer.replace(/á/g, "a").replace(/é/g, "e").replace(/í/g, "i").replace(/ó/g, "o").replace(/ú/g, "u");
    solution = solution.replace(/á/g, "a").replace(/é/g, "e").replace(/í/g, "i").replace(/ó/g, "o").replace(/ú/g, "u");
    if (answer === solution) {
      return true;
    }//removing quoutes:
    answer = answer.replace(/"/g, "");
    solution = solution.replace(/"/g, "");
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
