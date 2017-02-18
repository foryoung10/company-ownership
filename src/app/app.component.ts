import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Http } from '@angular/http';
import { FormControl } from '@angular/forms';

import { Main } from '../pages/main/main';
import { Side } from '../pages/side/side';

import { Company } from '../models/company';
import { Services } from '../providers/services';
import 'rxjs/add/operator/debounceTime';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements AfterViewInit {
  @ViewChild(Nav) nav: Nav;
  @ViewChild(Main) main: Main;
  @ViewChild('myNav') navCtrl: NavController;
  rootPage: any = Main;
  company: any;
  searchTerm: string = '';
  companies: Company[];
  searchControl: FormControl;
  searching: any = false;

  ngAfterViewInit() {
  //  this.http.get('build/json/company.json').map(res => res.json()).subscribe(companies => {
  //      this.companies = companies;
  //     }); //(rej) => {console.error("Could not load local data",rej)});
    this.services.loadCompanies().subscribe(companies => { //      this.companies = companies;
      this.companies = companies;
      for(let c of companies){
            if(c.CompanyName === "Apple"){
              this.nav.push(Main, c);
            }
        }
     }); //(rej) => {console.error("Could not load local data",rej)});
    
  }

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, private http: Http, private services: Services) {
    this.searchControl = new FormControl()
    this.initializeApp();



    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Main', component: Main },
      { title: 'Side', component: Side }
    ];


}


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

    });
  }

  goToCompany(CompanyName: string,  OwnerPercent: number, PublicOwn: number, PrivateOwn: number,   LatestDisclosed: number, MarketValueUSD: number, TotalShares: number) {
    console.log(CompanyName);
    //this.main.goToCompany(CompanyName);
    console.log(OwnerPercent, PublicOwn, PrivateOwn, LatestDisclosed, MarketValueUSD, TotalShares);
    this.nav.push(Main, {CompanyName, OwnerPercent, PublicOwn, PrivateOwn, LatestDisclosed, MarketValueUSD, TotalShares});

  }

ionViewDidLoad() {
    this.setFilteredCompanies();

    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;
      this.setFilteredCompanies();

  });

}

  onSearchInput(){
       this.searching = true;
   }

  setFilteredCompanies() {
    this.companies = this.services.filterCompanies(this.searchTerm);

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
