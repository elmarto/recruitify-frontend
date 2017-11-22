import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { EntrevistasListComponent } from './entrevistas/entrevistas-list/entrevistas-list.component';
import { EntrevistasDetailComponent } from './entrevistas/entrevistas-detail/entrevistas-detail.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LoginComponent },
  { path: 'entrevistas', component: EntrevistasListComponent, children: [
    { path: ':id', component: EntrevistasDetailComponent },
  ] },
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
