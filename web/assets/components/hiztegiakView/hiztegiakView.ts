import { Component, Input } from '@angular/core';
import {ViewController, NavParams} from 'ionic-angular'

@Component({
  selector: 'hiztegiakView',
  templateUrl: 'hiztegiakView.html'
})
export class hiztegiakView {
  @Input()
  result: object;

  constructor(public viewCtrl: ViewController,
  	public navParams: NavParams) {
  		this.result = navParams.get('result');
  }
}
