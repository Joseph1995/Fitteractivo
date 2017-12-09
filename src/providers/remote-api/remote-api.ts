import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';



/*
  Generated class for the RemoteApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class RemoteApiProvider {

  private url: string = "http://localhost/fitteractivo-api/rutina/rutina_asignada?usuario_id=1";
  private url2: string = "http://localhost/fitteractivo-api/ejercicio/ejercicios_by_rutina?rutina_id=";
  

  constructor(private http: Http) {

  } 

  getData(){

    let opt: RequestOptions
    let myHeaders: Headers = new Headers
    myHeaders.append('Content-type', 'application/x-www-form-urlencoded'),
    myHeaders.append('Access-Control-Request-Method', '*'),
    opt = new RequestOptions({
      headers: myHeaders
    })
    return this.http.get(this.url,opt)
    .do(this.logResponde)
    .map(this.extractData)
    .catch(this.catchError)
  }

  private catchError( error: Response | any){
      console.log(error);
      return Observable.throw(error.json().error || "Server Error")
      
    }



  private logResponde (res: Response){
    console.log(res);
  }


  private extractData (res: Response){
    return res.json();
    
  }


  getEjercicio(id){
        
        let opt: RequestOptions
        let myHeaders: Headers = new Headers
        myHeaders.append('Content-type', 'application/x-www-form-urlencoded'),
        myHeaders.append('Access-Control-Request-Method', '*'),
        opt = new RequestOptions({
          headers: myHeaders
        })
        return this.http.get(this.url2+id,opt)
        .do(this.logResponde)
        .map(this.extractData)
        .catch(this.catchError)

      }
}
