import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MedicosComponent } from './Intermediate/spies/medicos.component';
import { DoctorComponent } from './intermediate2/doctor/doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    DoctorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
