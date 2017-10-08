import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UsuarioPage} from '../usuario/usuario';
import {ObjetivosPage} from '../objetivos/objetivos';
import {RutinaPage} from '../rutina/rutina';
import {EntrenoPage} from '../entreno/entreno';
import {RankingPage} from '../ranking/ranking';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

usuarioPage= UsuarioPage;
objetivosPage= ObjetivosPage;
rutinaPage= RutinaPage;
entrenoPage=EntrenoPage;
rankingPage=RankingPage;



}
