import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Main } from '../pages/main/main';
import { Side } from '../pages/side/side';
import { Services } from '../providers/services';

@NgModule({
  declarations: [
    MyApp,
    Main,
    Side
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Main,
    Side
  ],
  providers: [Services, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
