import { expect } from 'chai';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import {AppModule} from './app.module';
import 'mocha';

describe('Hello function', () => {

  it('jejej', () => {
    // console.log(AppModule);
    const result = "Hello world!";
    expect(result).to.equal('Hello world!');
  });

});