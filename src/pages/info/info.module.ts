import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoPage } from './info';
import { YoutubePipe } from '../../pipes/youtube/youtube';

@NgModule({
  declarations: [
    InfoPage,
    YoutubePipe,
  ],
  imports: [
    IonicPageModule.forChild(InfoPage),
  ],
})
export class InfoPageModule {}
