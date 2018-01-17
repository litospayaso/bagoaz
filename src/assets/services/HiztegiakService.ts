import {Injectable} from "@angular/core";
import { Http } from '@angular/http';
import $ from 'jquery';

@Injectable()
export class HiztegiakService {
  constructor(public http: Http) {
    this.http = http;
  }

  translate(hitza,language,callback,entry=true) {
    let url = "https://hiztegiak.elhuyar.eus/";
    if(language === "eu"){
      url = url.concat("eu_es/");
    }else{
      url = url.concat("es_eu/");
    }
    url = url.concat(hitza);
    this.http.get(url).subscribe((data)=>{
      let trans: Array<string> = Array();
      let examples: Array<string> = Array();
      const el = $(data["_body"].replace("<!doctype html>","").replace(/src=/gi, "srcad="));
      if(el.find(".wrapDef").length===1){//Palabra encontrada.
        const strong = el.find(".lehena strong");
        for (let i=0;i<strong.length && i<4;i++){
          if(!trans.includes($(strong[i]).text())){
            trans.push(strong[i].innerText);
          }
        }
        const remark = el.find(".remark_"+(language==="eu"?"es_eu":"eu_es"));
        for (let i=0;i<remark.length && i<4;i++){
          if(!trans.includes($(remark[i]).text())){
            trans.push(remark[i].innerText);
          }
        }
        let padDefn = el.find(".padDefn p");
        for (let i=0;i<padDefn.length && i<4;i++){
          examples.push(padDefn[i].innerText);
        }
        hitza=el.find("#tts_source").text()
        callback({hitza,trans,examples,language});
      }else{//Palabra no encontrada.
        if(el.find(".didyoumean").length>0 && entry){
          this.translate(el.find(".didyoumean a")[0].innerText,language,callback,false);
        }else{
          callback(false);
        }
      }
    });
  }
}