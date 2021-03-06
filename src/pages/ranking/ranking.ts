import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';


/**
 * Generated class for the RankingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html',
})
export class RankingPage {
  
  ser:any;
  rep:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,  public events: Events, public ngZone: NgZone) { }

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
