import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Busqueda } from '../../shared/models/models';
import { MOCK_BUSQUEDAS } from '../../mock';
import { BusquedasService } from '../busquedas.service';

@Component({
  selector: 'app-busquedas-list',
  templateUrl: './busquedas-list.component.html',
  styleUrls: ['./busquedas-list.component.css']
})
export class BusquedasListComponent implements OnInit {
  displayedColumns = ['cliente', 'posicion', 'estado', 'fecha_creacion', 'skills', 'actions'];
  dataSource = null;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  constructor(
    busquedasService: BusquedasService
  ) {
    busquedasService.all().subscribe(result => this.dataSource = new MatTableDataSource<Busqueda>(result));
  }

  ngOnInit() {
  }

}
