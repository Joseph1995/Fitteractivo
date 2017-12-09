import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
  
})
export class UsuarioPage {
  shownGroup=null;

  objetivos =[
    {
      titulo:"Edad Metábolica",
      desc:"Un marcador que averigua nuestra condición y estado de salud en función del metabolismo",
      color:"dark" 
    },
    {
      titulo:"Peso",
      desc:"",
      color:"secondary"
    },
    {
      titulo:"Grasa Corporal",
      desc:"¿QUE ES EL % DE GRASA CORPORAL? Es la cantidad de grasa corporal expresada como una proporción del peso corporal",
      color:"danger"
    },
    {
      titulo:"Masa Muscular",
      desc:"",
      color:"dark"
    },
    {
      titulo:"Aporte Calórico",
      desc:"",
      color:"dark"
    },
    {
      titulo:"Liquido Corporal",
      desc:"",
      color:"dark"
    }
  ]



  @ViewChild(Slides) slides: Slides;

  MensajeSeries="";
  MensajeRepeticiones="";
  isConnected: boolean = false;

  macAddress= "20:16:05:03:05:57";
  btAttempt:string="none";


  dataSeries = 0;
  dataRepeticiones = 0;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public bluetoothSerial: BluetoothSerial,
     public events : Events,
     
    ) {
     
  }

  connectBT(){
   this.events.publish("connect", this.macAddress);
  }

  slide() {
    this.slides.slideTo(1, 500);
  }

  confg(){
    this.navCtrl.push("ConfigPage");
  } 
  

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
};
    isGroupShown(group) {
        return this.shownGroup === group;
    };

}
