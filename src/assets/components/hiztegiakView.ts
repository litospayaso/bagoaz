import { Component, Input } from '@angular/core';

@Component({
  selector: 'hiztegiakView',
  templateUrl: 'hiztegiakView.html'
})
export class hiztegiakView {
  @Input()
  result: object;

  constructor() {
  }
}
