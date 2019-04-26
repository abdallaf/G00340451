import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {ModelsPage} from '../pages/models/models';
import {SamsungPage} from '../pages/samsung/samsung';
import {IphonePage} from '../pages/iphone/iphone';
import { HuaweiPage } from '../pages/huawei/huawei';
import { HtcPage } from '../pages/htc/htc';
import { AlcatelPage } from '../pages/alcatel/alcatel';
import {SubmitPage} from '../pages/submit/submit';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SamsungPage,
    IphonePage,
    HuaweiPage,
    HtcPage,
    AlcatelPage,
    SubmitPage,
    ModelsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SamsungPage,
    IphonePage,
    HuaweiPage,
    HtcPage,
    AlcatelPage,
    SubmitPage,
    ModelsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
