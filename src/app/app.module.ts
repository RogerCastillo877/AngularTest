import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MedicosComponent } from './Intermediate/spies/medicos.component';
import { DoctorComponent } from './intermediate2/doctor/doctor.component';
import { DoctorService } from './intermediate2/doctor/doctor.service';
import { HospitalComponent } from './intermediate2/hospital/hospital.component';
import { IncrementadorComponent } from './intermediate2/incrementer/incrementador.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ROUTES } from './advance/routes/app.routes';
import { NavbarComponent } from './advance/navbar/navbar.component';
import { RouterDoctorComponent } from './advance/router-doctor/router-doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    DoctorComponent,
    HospitalComponent,
    IncrementadorComponent,
    NavbarComponent,
    RouterDoctorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot( ROUTES )
  ],
  providers: [
    DoctorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
