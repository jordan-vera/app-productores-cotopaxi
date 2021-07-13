import { Visita } from './../modelo/Visitas';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './Global'

@Injectable({
  providedIn: 'root'
})
export class VisitasService {

  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = global.url;
  }

  getAll(): Observable<any> {
    return this._http.get(this.url + 'visitas');
  }

  getOne(plataforma): Observable<any> {
    return this._http.get(this.url + 'visitas-plataforma/' + encodeURIComponent(plataforma));
  }

  create(data: Visita): Observable<any> {
    let params = JSON.stringify(data);
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');

    return this._http.post(this.url + 'addvisita', params, { headers: headers });
  }
}
