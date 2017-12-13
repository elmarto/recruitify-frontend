import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { APP_CONST } from '../app.const';

@Injectable()
export class GeneralService {

  constructor(
    private http: Http
  ) { }

  getSkills() {
    return this.http.get(`${APP_CONST.SETTINGS.API}/skills`)
      .map((response: Response) => response.json() )
      .catch(error => Observable.throw(error.json()));
  }

  getSeniorities() {
    return this.http.get(`${APP_CONST.SETTINGS.API}/seniorities`)
      .map((response: Response) => response.json() )
      .catch(error => Observable.throw(error.json()));
  }

  getCandidates(skillIds) {
    return this.http.post(`${APP_CONST.SETTINGS.API}/candidates`, skillIds)
      .map((response: Response) => response.json() )
      .catch(error => Observable.throw(error.json()));
  }
}
