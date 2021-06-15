import { Galeria } from './../modelo/Galeria';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './Global'

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = global.url;
  }

  getOne(idproductor: number): Observable<any> {
    return this._http.get(this.url + 'galeria/' + idproductor);
  }

  create(data: Galeria): Observable<any> {
    let params = JSON.stringify(data);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'galeria', params, { headers: headers });
  }

  delete(idgaleria: number, nombreArchivo: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + 'galeria/' + idgaleria + '/' + nombreArchivo, { headers: headers });
  }
}
