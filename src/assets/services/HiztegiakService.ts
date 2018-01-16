import {Injectable} from "@angular/core";
import { Http } from '@angular/http';

@Injectable()
export class HiztegiakService {
  constructor(public http: Http) {
    this.http = http;
  }

  translate(hitza,language,callback) {
  	console.info(hitza,language,callback);
  }
}