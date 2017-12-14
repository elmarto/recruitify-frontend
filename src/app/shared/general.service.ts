import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { APP_CONST } from '../app.const';
import { HttpParams } from '@angular/common/http';

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

  getCandidates(skillIds: any[]) {
    const params = skillIds.map(id => `ids=${id}`).join('&');
    return this.http.get(`${APP_CONST.SETTINGS.SERVER}/Candidatos/GetCandidatosSkills?${params}`)
      .map((response: Response) => response.json() )
      .catch(error => Observable.throw(error.json()));
  }
}
