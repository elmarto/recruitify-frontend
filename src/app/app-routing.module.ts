import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { EntrevistasListComponent } from './entrevistas/entrevistas-list/entrevistas-list.component';
import { EntrevistasDetailComponent } from './entrevistas/entrevistas-detail/entrevistas-detail.component';
import { EntrevistaPlayComponent } from './entrevistas/entrevista-play/entrevista-play.component';
import { BusquedasListComponent } from './busquedas/busquedas-list/busquedas-list.component';
import { BusquedasDetailComponent } from './busquedas/busquedas-detail/busquedas-detail.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LoginComponent },
  { path: 'entrevistas', component: EntrevistasListComponent},
  { path: 'entrevistas/:id', component: EntrevistasDetailComponent, pathMatch: 'full', },
  { path: 'entrevistas/:id/play', component: EntrevistaPlayComponent, pathMatch: 'full', },
  { path: 'busquedas', component: BusquedasListComponent},
  { path: 'busquedas/:id', component: BusquedasDetailComponent, pathMatch: 'full', }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
