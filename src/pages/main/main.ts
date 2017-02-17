
import { Component, ViewChild } from '@angular/core';
import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { NavController, NavParams, Slides, ViewController } from 'ionic-angular';

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
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private services: Services ) {
  //  this.http.get('build/json/company.json').map(res => res.json()).subscribe(companies => {
  //    this.companies = companies;
  //  }); //(rej) => {console.error("Could not load local data",rej)});
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
  }



  // title = "Public Market";

  // markets = [
  //   {
  //     title: "Public Market",
  //     description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
  //     image: "assets/img/ica-slidebox-img-1.png",
  //   },
  //   {
  //     title: "Private Market",
  //     description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
  //     image: "assets/img/ica-slidebox-img-2.png",
  //   }
  // ];

  slideChanged() {
    // let currentIndex = this.slides.getActiveIndex();
    // this.title = this.markets[currentIndex].title;
    // console.log("Current index is", currentIndex);
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

}
