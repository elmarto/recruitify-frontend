import { Component, OnInit } from '@angular/core';
import { MOCK_ENTREVISTAS } from '../../mock';
import { Entrevista, Candidato } from '../../shared/models/models';
import { Observable, Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { EntrevistasService } from '../entrevistas.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-entrevista-play',
  templateUrl: './entrevista-play.component.html',
  styleUrls: ['./entrevista-play.component.scss']
})
export class EntrevistaPlayComponent implements OnInit {
  entrevista: Entrevista;
  questionActive = 0;
  respuestas = {};
  timer = 0;
  timerSubscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private entrevistasService: EntrevistasService,
  ) {
    this.activatedRoute.params.subscribe(params => {
      entrevistasService.one(params.id).subscribe(response => this.entrevista = response.entrevistaResultado);
    });
  }

  ngOnInit() {
    this.setTimer();
  }

  onAnswer(answer) {
    if (answer !== 'prev') {
      this.questionActive++;
    } else if (answer === 'prev') {
      this.questionActive--;
    }
  }

  setTimer() {
    this.timerSubscription = Observable.timer(1000, 1000).subscribe(t => {
      return this.timer++;
    });
  }

  submit() {
    console.log(this.entrevista);
    const prospect = {
      'id_entrevista': this.entrevista.id,
      'id_Busqueda': this.entrevista.busqueda.id,
      'id_candidato': this.entrevista.candidato.id,
      'puntaje': this.entrevista.puntaje,
      'fecha': this.entrevista.fecha,
      'salario': parseInt(this.entrevista.salario + '', 10),
      'notas': this.entrevista.notas
    };
    this.entrevistasService.save(this.entrevista.id, prospect)
      .subscribe(result => this.router.navigate([`/busquedas/${this.entrevista.busqueda.id}/report`]));
  }

}

