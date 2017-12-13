import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Entrevista } from '../../shared/models/models';
import { MOCK_ENTREVISTAS } from '../../mock';
import { EntrevistasService } from '../entrevistas.service';

@Component({
  selector: 'app-entrevistas-list',
  templateUrl: './entrevistas-list.component.html',
  styleUrls: ['./entrevistas-list.component.css']
})
export class EntrevistasListComponent implements OnInit {
  displayedColumns = ['candidato', 'fecha', 'busqueda', 'actions'];
  dataSource;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  constructor(
    private entrevistasService: EntrevistasService
  ) {
    this.entrevistasService.all().subscribe(entrevistas => {
        console.log(MOCK_ENTREVISTAS[0]);
      this.dataSource = new MatTableDataSource<Entrevista>(entrevistas);
      console.log(entrevistas);
    }
    );
  }

  ngOnInit() {
  }

}
