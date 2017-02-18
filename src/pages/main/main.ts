
import { Component, ViewChild } from '@angular/core';
import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { NavController, NavParams, Slides } from 'ionic-angular';

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
  show : boolean = false;
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private services: Services ) {
    this.CompanyName = navParams.get('CompanyName');
    this.company = {
      CompanyName : navParams.get('CompanyName'),
      OwnerPercent: navParams.get('OwnerPercent'),
      PublicOwn   : navParams.get('PublicOwn'),
      PrivateOwn  : navParams.get('PrivateOwn'),
      LatestDisclosed :  navParams.get('LatestDisclosed'),
      MarketValueUSD :  navParams.get('MarketValueUSD'),
      TotalShares    :  navParams.get('TotalShares')
    } ;

    //this.searchCompanies("Apple");

  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log("Current index is", currentIndex);
  }

  changeSlide(index:number) {
    this.slides.slideTo(index, 500);
  }
  
  getStyle(index:number) {
    let currentIndex = this.slides.getActiveIndex();
    if(currentIndex === index) {
      return "white";
    } else {
      return "";
    }
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

  // // pei chart starts
  // public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  // public pieChartData:number[] = [300, 500, 100];
  // public pieChartType:string = 'pie';
  //
  // // events
  // public chartClicked(e:any):void {
  //   console.log(e);
  // }
  //
  // public chartHovered(e:any):void {
  //   console.log(e);
  // }

  //pie chart end
