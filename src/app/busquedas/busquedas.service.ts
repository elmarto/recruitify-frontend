import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { APP_CONST } from '../app.const';

@Injectable()
export class BusquedasService {

  constructor(
    private http: Http
  ) { }

  all() {
    return this.http.get(`${APP_CONST.SETTINGS.API}/busquedas`)
      .map((response: Response) => response.json() )
      .catch(error => Observable.throw(error.json()));
  }

  one(id) {
    return this.http.get(`${APP_CONST.SETTINGS.SERVER}/busquedas/getBusquedas/${id}`)
      .map((response: Response) => response.json() )
      .catch(error => Observable.throw(error.json()));
  }

  oneWithCandidates(id) {
    return this.http.get(`${APP_CONST.SETTINGS.SERVER}/busquedas/getBusquedasCandidatos/${id}`)
      .map((response: Response) => response.json() )
      .catch(error => Observable.throw(error.json()));
  }

  contactCandidates(id, candidatos) {
    return this.http.post(`${APP_CONST.SETTINGS.SERVER}/busquedas/contactar/${id}`, candidatos)
      .map((response: Response) => response.json() );
  }

  save(id, prospect) {
    return this.http.post(`${APP_CONST.SETTINGS.API}/busquedas/${id}`, prospect)
      .map((response: Response) => response.json() )
      .catch(error => Observable.throw(error.json()));
  }

  update(id, prospect) {
    return this.http.put(`${APP_CONST.SETTINGS.API}/busquedas/${id}`, prospect)
      .map((response: Response) => response.json() )
      .catch(error => Observable.throw(error.json()));
  }
}
