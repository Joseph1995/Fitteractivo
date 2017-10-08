import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})



export class RegisterPage {

  formularioRegistro: FormGroup;
  image:string="";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public fb: FormBuilder, 
    private camera: Camera,
    public actionSheet: ActionSheetController
  ) {}


  ngOnInit(){
    this.formularioRegistro=this.fb.group({
      nombre:['', Validators.required],
      edad:['', Validators.required],
      email:['', Validators.required],
      pass: ['', Validators.required],
      tel:['', Validators.required],
      peso:['', Validators.required],
      altura:['',Validators.required] 
    });

    this.setvalues();


  }
 
  setvalues(){
    if(this.navParams.data){
      const googleData=this.navParams.data;
      this.formularioRegistro.get('nombre').setValue(googleData.displayName);
      this.formularioRegistro.get('email').setValue(googleData.email);
      this.image=googleData.photoURL;           
      
    }
  }

  escogerFoto(){
    let CameraOptions=0;
    const action = this.actionSheet.create({
       title: 'Selecciona una opción',
       buttons: [
         {
           text:'Camara',
           role:'cancel',
           icon:'camera',
           handler:()=>{
              CameraOptions = this.camera.PictureSourceType.CAMERA;
           }
         },
         {
           text:'Galeria',
           role:'cancel',
           icon:'images',
           handler:()=>{
             CameraOptions = this.camera.PictureSourceType.PHOTOLIBRARY;
           }
         }
       ]
    })

    action.present();
    action.onDidDismiss(()=>{
      this.camera.getPicture({
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: CameraOptions
      }).then(data => {
        console.log('data img', data);
        this.image = 'data:image/jpg;base64,' + data;
      }).catch(err => {
        console.log('error', err);
      });
    });

  }

  // completeForm() {
  //   this.provider.signUp(this.formularioRegistro.value);
  // }

  Tabs(){
    this.navCtrl.setRoot(TabsPage);
  }

}
