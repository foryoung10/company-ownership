import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Company } from '../models/company';
/*
  Generated class for the GithubUsers provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Services {


  constructor(public http: Http) {

  }
  // Load all github users
  loadCompanies(): Observable<Company[]>  {
   return this.http.get('build/json/company.json').map(res =><Company[]>res.json());
 }

}
