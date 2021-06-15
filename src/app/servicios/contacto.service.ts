import { Contacto } from './../modelo/Contacto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './Global'

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = global.url;
  }

  getOne(idcontacto: number): Observable<any> {
    return this._http.get(this.url + 'contacto/' + idcontacto);
  }

  create(data: Contacto): Observable<any> {
    let params = JSON.stringify(data);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'contacto', params, { headers: headers });
  }

  update(data: Contacto): Observable<any> {
    let params = JSON.stringify(data);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.put(this.url + 'contacto', params, { headers: headers });
  }

  delete(idcontacto: number): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + 'contacto/' + idcontacto, { headers: headers });
  }
}
