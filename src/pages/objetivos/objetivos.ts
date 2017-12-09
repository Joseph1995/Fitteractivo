import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';


/**
 * Generated class for the ObjetivosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-objetivos',
  templateUrl: 'objetivos.html',
})
export class ObjetivosPage {

  objetivos =[
    {
      titulo:"Aporte Calorico",
      desc:"Un marcador que averigua nuestra condición y estado de salud en función del metabolismo",
      color:"primary",
      valor:"1709.0"
    },
    {
      titulo:"Metabolismo Basal",
      desc:"",
      color:"secondary",
      valor:"1248.0"
    },
    {
      titulo:"Grasa Corporal",
      desc:"¿QUE ES EL % DE GRASA CORPORAL? Es la cantidad de grasa corporal expresada como una proporción del peso corporal",
      color:"danger",
      valor:"16.3%"
    },
    {
      titulo:"Pulsos",
      desc:"",
      color:"dark",
      valor:"127.25 PPM"
    }
  ]

}
