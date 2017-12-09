
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import {AngularFireModule} from 'angularfire2'; 
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';


import * as firebase from 'firebase';
import { Camera } from '@ionic-native/camera';
import { RemoteApiProvider } from '../providers/remote-api/remote-api';
import {HttpModule} from '@angular/http';


firebase.initializeApp({
  apiKey: "AIzaSyC4E9w_xKLMmJ-mamwR1WfpHUYyMaDutM8",
  authDomain: "fitteractivo-240d4.firebaseapp.com",
  databaseURL: "https://fitteractivo-240d4.firebaseio.com",
  projectId: "fitteractivo-240d4",
  storageBucket: "fitteractivo-240d4.appspot.com",
  messagingSenderId: "36163497635"
})

@NgModule({
  declarations: [
    MyApp,
    HomePage
 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC4E9w_xKLMmJ-mamwR1WfpHUYyMaDutM8",
      authDomain: "fitteractivo-240d4.firebaseapp.com",
      databaseURL: "https://fitteractivo-240d4.firebaseio.com",
      projectId: "fitteractivo-240d4",
      storageBucket: "fitteractivo-240d4.appspot.com",
      messagingSenderId: "36163497635"
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
    ],

  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BluetoothSerial,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RemoteApiProvider
  ]
})
export class AppModule {}
