import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {RegisterPage} from '../pages/register/register';
import {UsuarioPage} from '../pages/usuario/usuario';
import {ObjetivosPage} from '../pages/objetivos/objetivos';
import {RutinaPage} from '../pages/rutina/rutina';
import {EntrenoPage} from '../pages/entreno/entreno';
import {RankingPage} from '../pages/ranking/ranking';
import {TabsPage} from '../pages/tabs/tabs';

import {AngularFireModule} from 'angularfire2'; 
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import * as firebase from 'firebase';
import { Camera } from '@ionic-native/camera';
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
    HomePage,
    LoginPage,
    RegisterPage,
    UsuarioPage,
    ObjetivosPage,
    RutinaPage,
    EntrenoPage,
    RankingPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyC4E9w_xKLMmJ-mamwR1WfpHUYyMaDutM8",
      authDomain: "fitteractivo-240d4.firebaseapp.com",
      databaseURL: "https://fitteractivo-240d4.firebaseio.com",
      projectId: "fitteractivo-240d4",
      storageBucket: "fitteractivo-240d4.appspot.com",
      messagingSenderId: "36163497635"
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    UsuarioPage,
    ObjetivosPage,
    RutinaPage,
    EntrenoPage,
    RankingPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
