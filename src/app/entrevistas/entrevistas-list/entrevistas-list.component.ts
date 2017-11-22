import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Entrevista } from '../../shared/models/models';
import { MOCK_ENTREVISTAS } from '../../mock';

@Component({
  selector: 'app-entrevistas-list',
  templateUrl: './entrevistas-list.component.html',
  styleUrls: ['./entrevistas-list.component.css']
})
export class EntrevistasListComponent implements OnInit {
  displayedColumns = ['candidato', 'fecha', 'skills_busqueda', 'actions'];
  dataSource = new MatTableDataSource<Entrevista>(MOCK_ENTREVISTAS);

  constructor() { }

  ngOnInit() {
  }

}
