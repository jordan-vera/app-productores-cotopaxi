import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './Global'
import { Administrador } from '../modelo/Administrador';

@Injectable({
    providedIn: 'root'
})
export class AdministradorService {

    public url: string;

    constructor(
        private _http: HttpClient
    ) {
        this.url = global.url;
    }

    getOne(idadmin: number): Observable<any> {
        return this._http.get(this.url + 'admin/' + idadmin);
    }

    login(user: string, clave: string): Observable<any> {
        return this._http.get(this.url + 'login/' + encodeURIComponent(user) + '/' + encodeURIComponent(clave));
    }

    update(data: Administrador): Observable<any> {
        let params = JSON.stringify(data);
        var headers = new HttpHeaders();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        headers.append('Accept', 'application/json');
        headers.append('content-type', 'application/json');

        return this._http.post(this.url + 'updateadmin', params, { headers: headers });
    }

}
