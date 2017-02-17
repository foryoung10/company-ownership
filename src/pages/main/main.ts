import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides, ViewController } from 'ionic-angular';


@Component({
  selector: 'Main',
  templateUrl: 'main.html'
})
export class Main {
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController) {
    
  }

  title = "Public Market";

  markets = [
    {
      title: "Public Market",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "Private Market",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/ica-slidebox-img-2.png",
    }
  ];

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    this.title = this.markets[currentIndex].title;
    console.log("Current index is", currentIndex);
  }

}
