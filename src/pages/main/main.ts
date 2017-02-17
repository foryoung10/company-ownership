
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private services: Services ) {
  //  this.http.get('build/json/company.json').map(res => res.json()).subscribe(companies => {
  //    this.companies = companies;
  //  }); //(rej) => {console.error("Could not load local data",rej)});
    this.CompanyName = navParams.get('CompanyName');
  }
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


  @ViewChild(Slides) slides: Slides;


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
  //currentIndex = 1;
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
