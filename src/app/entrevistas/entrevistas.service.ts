import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EntrevistasService {

  constructor(
    private http: Http
  ) { }

  all() {
    return this.http.get(`/entrevistas`)
      .map((response: Response) => response )
      .catch(error => Observable.throw(error.json()));
  }

  one(id) {
    return this.http.get(`/entrevistas/${id}`)
      .map((response: Response) => response )
      .catch(error => Observable.throw(error.json()));
  }

  save(id, prospect) {
    return this.http.post(`/entrevistas/${id}`, prospect)
      .map((response: Response) => response )
      .catch(error => Observable.throw(error.json()));
  }

  update(id, prospect) {
    return this.http.put(`/entrevistas/${id}`, prospect)
      .map((response: Response) => response )
      .catch(error => Observable.throw(error.json()));
  }
}
