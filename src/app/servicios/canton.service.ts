import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './Global'

@Injectable({
  providedIn: 'root'
})
export class CantonService {

  public url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = global.url;
  }

  getAll(): Observable<any> {
    return this._http.get(this.url + 'canton');
  }

  getOne(idactividad: number): Observable<any> {
    return this._http.get(this.url + 'canton/' + idactividad);
  }

}
