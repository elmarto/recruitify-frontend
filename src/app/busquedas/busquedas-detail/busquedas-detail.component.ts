import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MOCK_BUSQUEDAS, MOCK_CANDIDATOS, MOCK_SKILLS } from '../../mock';
import { Busqueda, Candidato, Skill } from '../../shared/models/models';
import { MatTableDataSource, MatSnackBar } from '@angular/material';
import { BusquedasService } from '../busquedas.service';
import { GeneralService } from '../../shared/general.service';

@Component({
  selector: 'app-busquedas-detail',
  templateUrl: './busquedas-detail.component.html',
  styleUrls: ['./busquedas-detail.component.css']
})
export class BusquedasDetailComponent implements OnInit {
  busqueda: Busqueda = null;
  skills: Skill[] = [];
  seniorities = [];
  displayedColumns = ['candidato', 'fecha', 'busqueda'];
  candidatos: Candidato[] = null;
  dataSource;
  candidatosVisible = false;

  constructor(
    public snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private busquedasService: BusquedasService,
    private generalService: GeneralService,
  ) {
    this.activatedRoute.params.subscribe(params => {
      generalService.getSeniorities().subscribe(seniorities => this.seniorities = seniorities);
      generalService.getSkills().subscribe(skills => this.skills = skills);
      busquedasService.oneWithCandidates(params.id).subscribe(response => {
        this.busqueda = response.busqueda;
        this.candidatos = response.candidatos;
        this.dataSource = new MatTableDataSource<Candidato>(this.candidatos);
      });
    });
  }

  ngOnInit() {}

  addSkill(newSkill: Skill) {
    const exist = !!this.busqueda.skills.filter(skill => skill.id === newSkill.id).length;
    if (!exist) {
      this.busqueda.skills.push(newSkill);
      newSkill = null;
    }
  }

  obtainCandidates() {
    this.candidatosVisible = false;
    const skillIds = this.busqueda.skills.map(skill => skill.id);
    this.generalService.getCandidates(skillIds).subscribe(response => {
      this.candidatos = response;
      this.dataSource = new MatTableDataSource<Candidato>(this.candidatos);
      this.candidatosVisible = true;
    });
  }

  removeSkill(index: number) {
    this.busqueda.skills.splice(index, 1);
  }

  getCandidatosSelected(): number[] {
    const candidatoIds = [];
    this.candidatos.forEach((candidato: any) => {
      if (candidato.selected) {
        candidatoIds.push(candidato.id);
      }
    });
    return candidatoIds;
  }

  contactCandidates() {
    const candidatoIds = this.getCandidatosSelected();
    this.busquedasService.contactCandidates(this.busqueda.id, candidatoIds).subscribe(() => {
      this.snackBar.open(`Se ha contactado a los (${candidatoIds.length}) candidatos seleccionados`, null, { duration: 2000 });
      this.router.navigate([`/busquedas`]);
    });
  }

  submit() {
    this.router.navigate([`/busquedas`]);
  }
}
