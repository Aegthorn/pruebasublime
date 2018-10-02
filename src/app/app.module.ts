import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListadoPage } from '../pages/listado/listado';

export const firebaseConfig = {
  apiKey: "AIzaSyDTubo4XxDbY2bKMVOTEs6p8Erf1EP8kyQ",
  authDomain: "erp-crm-0000.firebaseapp.com",
  databaseURL: "https://erp-crm-0000.firebaseio.com",
  storageBucket: "erp-crm-0000.appspot.com",
  messagingSenderId: '573198817473'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListadoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListadoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
