import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { RemoteApiProvider } from '../../providers/remote-api/remote-api';

@IonicPage()
@Component({
  selector: 'page-rutina',
  templateUrl: 'rutina.html',
})

export class RutinaPage {
  items=[];

  

  constructor(public navCtrl: NavController, private remote : RemoteApiProvider) {
    
    this.getRutina();
     
  }
  
  InfoRutina (item){
    this.navCtrl.push("EntrenoPage",{item:item});
  }

  getRutina(){
    this.remote.getData().subscribe (data => this.items= data);
  }

}