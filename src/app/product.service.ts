import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private _http: Http) { 
    console.log('service constructed')
    
  }
  private _albumUrl: '../assets/album.json';

  getAlbum (id:number) {
    return this._http.get(this._albumUrl).map((response) => {
      console.log(response)
      response.json();

    })
  }

}
