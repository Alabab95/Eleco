import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions } from '@angular/http'

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  constructor(public http: Http) {
    console.log('Hello DataServiceProvider Provider');
  }
  getListDetails(){
    return this.http.get('assets/data/products.json')
      .map((response:Response)=>response.json());
  }
}
