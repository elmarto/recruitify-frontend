import { Component, OnInit } from '@angular/core';
import { MOCK_ENTREVISTAS } from '../../mock';
import { Entrevista } from '../../shared/models/models';

@Component({
  selector: 'app-entrevista-play',
  templateUrl: './entrevista-play.component.html',
  styleUrls: ['./entrevista-play.component.css']
})
export class EntrevistaPlayComponent implements OnInit {
  entrevista: Entrevista = MOCK_ENTREVISTAS[0];
  questionActive = 0;
  calificacion = 0;
  constructor() { }

  ngOnInit() {
  }

}
