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

import { MatNativeDateModule, MatSelectModule, MatDialogModule, MatSnackBarModule,
  MatSidenavModule, MatButtonModule, MatIconModule, MatTableModule, MatDatepickerModule,
  MatCheckboxModule, MatInputModule, MatButtonToggleModule, MatCardModule, MatProgressSpinnerModule,
  MatTooltipModule, MatRadioModule, MatGridListModule } from '@angular/material';
import { EntrevistasListComponent } from './entrevistas/entrevistas-list/entrevistas-list.component';
import { EntrevistasDetailComponent } from './entrevistas/entrevistas-detail/entrevistas-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EntrevistasListComponent,
    EntrevistasDetailComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialPackModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }