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

  companies: any;

  constructor(public http: Http) {
    this.loadCompanies().subscribe(companies => {
    this.companies = companies});

  }
  // Load all github users
  loadCompanies(): Observable<Company[]>  {
   return this.http.get('json/company.json').map(res =><Company[]>res.json());
 }

 filterCompanies(searchTerm: string){
      console.log(searchTerm);

       return this.companies.filter((company) => {
           return company.CompanyName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
       });
     }

}
