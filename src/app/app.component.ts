import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { Events, ToastController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  series: number = 1;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    public events: Events, 
    public bt: BluetoothSerial,
    public toastCtrl: ToastController
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.events.subscribe('connect', (mac) => {
      this.bt.connect(mac).subscribe(data => {
        let msg = '';
        if (data === 'OK') {
          msg = 'Se ha conectado correctamente'
        } else {
          msg = 'No se ha podido conectar'
          
        }
        this.toastCtrl.create({
          message:msg,
          duration:3000,
          position:"top"
        }).present()
      }, err => {
        console.log(err)
        this.toastCtrl.create({
          message:"Error",
          duration:3000,
          position:"top",
          
        }).present()
      })
    });
    // this.bt.readUntil('\n').then((data: string) => {
    //   console.log('data')
    //   if (data !== '' && data.indexOf('terminado') === -1 && data.indexOf('serie') === -1) {
    //     if (data === '6') this.series++;
    //     console.log('Retrieve data', data);
    //     this.events.publish('getData', this.series, data);
    //   }
    // }).catch(err => {
    //     console.log(err)
    // });
    this.bt.subscribeRawData().subscribe(data => {
      const arr = new Uint8Array(data);
      const rawData = String.fromCharCode.apply(String, arr);
      if (/^\d+$/.test(rawData)) {
        if (rawData === '6' || rawData === 6) this.series++;
        console.log('Retrieve data', rawData);
        this.events.publish('getData', this.series, rawData);
      }
    }, err => {
      console.log('Error', err);
    })
    // this.bt.readUntil('\n').then((data: string) => {
    //   console.log('data')
    //   if (data !== '' && data.indexOf('terminado') === -1 && data.indexOf('serie') === -1) {
    //     if (data === '6') this.series++;
    //     console.log('Retrieve data', data);
    //     this.events.publish('getData', this.series, data);
    //   }
    // }).catch(err => {
    //     console.log(err)
    // })
  }
}

