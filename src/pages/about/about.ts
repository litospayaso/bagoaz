import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { readGaia } from '../readGaia/readGaia';
import { database } from '../home/home';

// import { DatabaseService } from '../../app/services/databaseService';

@Component({
  selector: 'about',
  templateUrl: 'about.html'
})
export class about {
  hizta:string;
  gaiak:Array<Object> = [];
}
