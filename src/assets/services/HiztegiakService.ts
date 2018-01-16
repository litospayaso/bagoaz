import {Injectable} from "@angular/core";
import { Http } from '@angular/http';

@Injectable()
export class HiztegiakService {
  constructor(public http: Http) {
    this.http = http;
  }

  translate(hitza,language,callback) {
    const el = window.document.createElement( 'html' );
    el.innerHTML = "<html><head><title>titleTest</title></head><body><a href='test0' class='hola'>test01</a><a href='test1' id='jejeje'>test02</a><a href='test2'>test03</a></body></html>";
    console.info(el.getElementsByTagName('a'));
    console.info(el.getElementsByClassName('hola')[0]["text"]);
    // console.info(el.getElementById('jejeje'));
    // let url = "https://hiztegiak.elhuyar.eus/";
    // if(language === "eu"){
    //   url = url.concat("eu_es/");
    // }else{
    //   url = url.concat("es_eu/");
    // }
    // url = url.concat(hitza);
    // this.http.get(url).subscribe((data)=>{
    //   console.info("data",data["_body"]);
    // });
  }
}