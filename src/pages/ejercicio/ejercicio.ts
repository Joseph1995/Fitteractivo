import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ejercicio',
  templateUrl: 'ejercicio.html',
})
export class EjercicioPage {

  ser: any;
  rep: any;
  ejercicio=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public ngZone: NgZone) { 
    this.ejercicio = this.navParams.data.ejercicio;
    console.log(this.ejercicio, "pagina ejercicio.ts");
  }
  


  ngOnInit(){
    this.events.subscribe('getData',(series,repet)=>{
      this.ngZone.run(() => {
        this.ser=series;
        this.rep=repet;
       })
       console.log('Series: ', series, ', Rep: ', repet);
    });
  }

}
