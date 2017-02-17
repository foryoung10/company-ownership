import { Component } from '@angular/core';
import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { NavController, NavParams } from 'ionic-angular';

import { Company } from '../../models/company';

import { Services } from '../../providers/services';



@Component({
  selector: 'Main',
  templateUrl: 'main.html'
})

@Injectable()
export class Main {
  static companies: Company[];
  company : {};
  CompanyName: string;
  TotalShares: string;
  item_length = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private services: Services ) {
  //  this.http.get('build/json/company.json').map(res => res.json()).subscribe(companies => {
  //    this.companies = companies;
  //  }); //(rej) => {console.error("Could not load local data",rej)});
    this.CompanyName = navParams.get('CompanyName');

  //  ///console.log(this.CompanyName);
    //this.services.loadCompanies().subscribe(companies => { //      this.companies = companies;
    //  Main.companies = companies;
    //  console.log(this.companies.length);
    //  .item_length = this.companies.length;

    //  });
    //   console.log(Main.companies.length);
    //console.log(this.companies.length);
  //   this.searchCompanies(Main.companies['CompanyName']);
  //  console.log (this.company['TotalShares']);


  }

  loadCompanies()  {
  ///  this.http.get('build/json/company.json').map(res => res.json()).subscribe(companies => {
  //      this.companies = companies;
  //    }); //(rej) => {console.error("Could not load local data",rej)});
    console.log('Companies loaded');
  }

  goToCompany(CompanyName: string) {
     this.navCtrl.push(Main, {CompanyName});
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }


  searchCompanies(CompanyName: string) {

    for(var i = 0; i < Main.companies.length; i++)
    {
      if(Main.companies[i].CompanyName == CompanyName)
      {
        this.company = Main.companies[i];
      }
    }
  }
}
