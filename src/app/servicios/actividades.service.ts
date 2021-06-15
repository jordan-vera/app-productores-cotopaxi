import { Actividades } from './../modelo/Actividades';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './Global'

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = global.url;
  }

  getAll(): Observable<any> {
    return this._http.get(this.url + 'actividades');
  }

  getOne(idactividad: number): Observable<any> {
    return this._http.get(this.url + 'actividades/' + idactividad);
  }

  create(data: Actividades): Observable<any> {
    let params = JSON.stringify(data);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'actividades', params, { headers: headers });
  }

  delete(idactividad: number): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + 'actividades/' + idactividad, { headers: headers });
  }
}
