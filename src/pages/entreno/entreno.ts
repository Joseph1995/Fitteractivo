import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RemoteApiProvider } from '../../providers/remote-api/remote-api';


@IonicPage()
@Component({
  selector: 'page-entreno',
  templateUrl: 'entreno.html',
})
export class EntrenoPage {
  infos=[];
  item;


  constructor(public navCtrl: NavController, public navParams: NavParams, private remote : RemoteApiProvider) {
    this.item=navParams.data.item;
    this.getEjerciciobyID(this.item);
  }

  getEjerciciobyID(item){
    this.remote.getEjercicio(this.item).subscribe(data =>this.infos = data);
  }





  InfoEjercicio(rutinas){
    this.navCtrl.push("InfoPage", {item: this.item});
  }

  ejercicio(series){
    this.navCtrl.push("InfoPage", {series: this.infos});
  }

}
