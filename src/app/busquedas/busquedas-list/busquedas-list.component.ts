import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Busqueda } from '../../shared/models/models';
import { MOCK_BUSQUEDAS } from '../../mock';

@Component({
  selector: 'app-busquedas-list',
  templateUrl: './busquedas-list.component.html',
  styleUrls: ['./busquedas-list.component.css']
})
export class BusquedasListComponent implements OnInit {
  displayedColumns = ['descripcion', 'estado', 'fecha_creacion', 'skills', 'actions'];
  dataSource = new MatTableDataSource<Busqueda>(MOCK_BUSQUEDAS);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  constructor() { }

  ngOnInit() {
  }

}
