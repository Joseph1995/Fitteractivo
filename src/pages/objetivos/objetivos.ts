import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  items = [
    'Aporte Calórico',
    'Metabolismo Basal',
    'Grasa Corporal',
    'Pulsos'
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}
