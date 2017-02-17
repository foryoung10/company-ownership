import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Main } from '../pages/main/main';
import { Side } from '../pages/side/side';
import { ChartsModule } from 'ng2-charts/ng2-charts';
//import { Chart } from 'chart.js/src/chart';

@NgModule({
  declarations: [
    MyApp,
    Main,
    Side
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Main,
    Side
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
