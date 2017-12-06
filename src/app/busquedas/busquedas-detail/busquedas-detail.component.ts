import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MOCK_BUSQUEDAS } from '../../mock';
import { Busqueda } from '../../shared/models/models';

@Component({
  selector: 'app-busquedas-detail',
  templateUrl: './busquedas-detail.component.html',
  styleUrls: ['./busquedas-detail.component.css']
})
export class BusquedasDetailComponent implements OnInit {
  busqueda: Busqueda = MOCK_BUSQUEDAS[0];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(() => {});
  }
}
