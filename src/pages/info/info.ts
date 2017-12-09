import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  ejercicio=[];
  item;
  videos : any[] =[
      {video : 'https://www.youtube.com/embed/G8mX-VJrUi8?rel=0&amp;controls=0&amp;showinfo=0'}
  ]




  constructor(public navCtrl: NavController, public datos: NavParams) {
 this.ejercicio= datos.data.series;
 console.log(this.ejercicio);
    

  }

  Empezar(){
    this.navCtrl.push("EjercicioPage", { ejercicio: this.ejercicio});
  }

}
