import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

   login(){
     this.navCtrl.push("LoginPage");
   }

   register(){
     this.navCtrl.push("RegisterPage");
   }

   RegistroGoogle(){
     const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(data=>{
          console.log(data);
          this.navCtrl.push("RegisterPage",data.user);
      }).catch(error=>{
        console.log("Error", error);
      })
   }

}
