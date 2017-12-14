import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { APP_CONST } from '../app.const';

@Injectable()
export class EntrevistasService {

  constructor(
    private http: Http
  ) { }

  all() {
    return this.http.get(`${APP_CONST.SETTINGS.API}/entrevistas`)
      .map((response: Response) => response.json() )
      .catch(error => Observable.throw(error.json()));
  }

  one(id) {
    return this.http.get(`${APP_CONST.SETTINGS.API}/entrevistas/${id}`)
      .map((response: Response) => response.json() )
      .catch(error => Observable.throw(error.json()));
  }

  save(id, prospect) {
    return this.http.post(`${APP_CONST.SETTINGS.SERVER}/entrevistas/update/${id}`, prospect)
      .map((response: Response) => response );
  }
}
