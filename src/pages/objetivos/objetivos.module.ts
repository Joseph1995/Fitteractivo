import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObjetivosPage } from './objetivos';
import {AccordionComponent} from '../../components/accordion/accordion';


@NgModule({
  declarations: [
    ObjetivosPage,
    AccordionComponent
  ],
  imports: [
   
    IonicPageModule.forChild(ObjetivosPage),
  ],
  exports:[
    ObjetivosPage
  ]
})
export class ObjetivosPageModule {}
