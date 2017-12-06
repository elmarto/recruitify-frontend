
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatNativeDateModule, MatSelectModule, MatDialogModule, MatSnackBarModule,
  MatSidenavModule, MatButtonModule, MatIconModule, MatTableModule, MatDatepickerModule,
  MatCheckboxModule, MatInputModule, MatButtonToggleModule, MatCardModule, MatProgressSpinnerModule,
  MatTooltipModule, MatRadioModule, MatGridListModule, MatTabsModule, MatPaginatorModule, MatChipsModule,
  MatSliderModule } from '@angular/material';


  const MAT_MODULES = [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonToggleModule,
    MatCardModule,
    MatRadioModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatChipsModule,
    MatSliderModule
  ];

@NgModule({
  imports: MAT_MODULES,
  exports: MAT_MODULES
})
export class MaterialPackModule { }
