import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialPackModule } from './shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './home/login/login.component';

import { EntrevistasService } from './entrevistas/entrevistas.service';
import { EntrevistasListComponent } from './entrevistas/entrevistas-list/entrevistas-list.component';
import { EntrevistasDetailComponent } from './entrevistas/entrevistas-detail/entrevistas-detail.component';
import { BusquedasListComponent } from './busquedas/busquedas-list/busquedas-list.component';
import { BusquedasDetailComponent } from './busquedas/busquedas-detail/busquedas-detail.component';
import { EntrevistaPlayComponent } from './entrevistas/entrevista-play/entrevista-play.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EntrevistasListComponent,
    EntrevistasDetailComponent,
    BusquedasListComponent,
    BusquedasDetailComponent,
    EntrevistaPlayComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialPackModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
