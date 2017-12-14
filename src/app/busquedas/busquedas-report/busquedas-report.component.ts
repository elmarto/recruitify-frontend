import { Component, OnInit } from '@angular/core';
import { Busqueda, Entrevista } from '../../shared/models/models';
import { MOCK_BUSQUEDAS, MOCK_ENTREVISTAS } from '../../mock';
import { EntrevistasService } from '../../entrevistas/entrevistas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BusquedasService } from '../busquedas.service';
declare var moment;

@Component({
  selector: 'app-busquedas-report',
  templateUrl: './busquedas-report.component.html',
  styleUrls: ['./busquedas-report.component.css']
})
export class BusquedasReportComponent implements OnInit {
  busqueda: Busqueda = null;
  entrevistas: Entrevista[] = null;
  diasActiva = null;
  entrevistaData = {
    entrevistados: 0,
    aprobados: 0,
    desaprobados: 0,
    salarioMax: 0,
    salarioMin: 0,
    salarioMedian: 0,
    salarioAvg: 0
  };

  chartSalarios = {
    labels: ['', '', ''],
    data: [0, 0, 0],
  };

  chartEdad = {
    labels: ['menos de 25 años', '25 a 40 años', 'más de 40 años'],
    data: [0, 0, 0],
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private busquedasService: BusquedasService,
  ) {
    this.activatedRoute.params.subscribe(params => {
      busquedasService.one(params.id).subscribe(response => {
        this.busqueda = response.busqueda;
        this.entrevistas = response.entrevistas.filter(entrevista => entrevista.puntaje);

        // this.mock();
        this.setActiveDays();
        this.setEdadChart();
        this.setSalariosChart();
        this.setEntrevistadosData();
      });
    });
  }

  ngOnInit() {
  }

  setActiveDays() {
    this.diasActiva = moment().diff(this.busqueda.fecha_creacion, 'days');
  }

  mock() {
    this.entrevistas.forEach(entrevista => {
      entrevista.puntaje = Math.random() * 10;
      entrevista.salario = Math.random() * 15000;
    });
  }

  getEdad(fecha: Date) {
    return moment().diff(fecha, 'years');
  }

  setEdadChart() {
    this.entrevistas.forEach(entrevista => {
      const edad = this.getEdad(entrevista.candidato.fecha);
      if (edad < 25) {
        this.chartEdad.data[0]++;
      } else if ( edad >= 25 && edad < 40) {
        this.chartEdad.data[1]++;
      } else {
        this.chartEdad.data[2]++;
      }
    });
  }

  getMedian(values) {
    values.sort( function(a, b) {return a - b; } );
    const half = Math.floor(values.length / 2);
    if (values.length % 2) {return values[half];
    } else {
      return (values[half - 1] + values[half]) / 2.0;
    }
  }

  setSalariosChart() {
    const salarios: number[] = this.entrevistas.map(entrevista => entrevista.salario);
    const salarioMax = Math.floor(Math.max(...salarios));
    const salarioMin = Math.floor(Math.min(...salarios));
    const salarioSum = salarios.reduce(function(a, b) { return a + b; });
    const salarioAvg = Math.floor(salarioSum / salarios.length);
    const salarioMedian = Math.floor(this.getMedian(salarios));
    const limit1 = Math.floor(salarioMedian - ((salarioMedian - salarioMin) / 2));
    const limit2 = Math.floor(salarioMedian + ((salarioMax - salarioMedian) / 2));

    this.chartSalarios.labels[0] = `Menos de $${limit1}`;
    this.chartSalarios.labels[1] = `De $${limit1} y $${limit2}`;
    this.chartSalarios.labels[2] = `Más de $${limit2}`;
    this.entrevistas.forEach(entrevista => {
      if (entrevista.salario < limit1) {
        this.chartSalarios.data[0]++;
      } else if (entrevista.salario >= limit1 && entrevista.salario < limit2) {
        this.chartSalarios.data[1]++;
      } else {
        this.chartSalarios.data[2]++;
      }
    });

    this.entrevistaData.salarioAvg = salarioAvg;
    this.entrevistaData.salarioMax = salarioMax;
    this.entrevistaData.salarioMin = salarioMin;
    this.entrevistaData.salarioMedian = salarioMedian;
  }

  setEntrevistadosData() {
    this.entrevistaData.entrevistados = this.entrevistas.length;

    this.entrevistas.forEach((e) => {
      if (e.puntaje > 5) {
        this.entrevistaData.aprobados++;
      }
    });

    this.entrevistaData.desaprobados = this.entrevistaData.entrevistados - this.entrevistaData.aprobados;
  }

}
