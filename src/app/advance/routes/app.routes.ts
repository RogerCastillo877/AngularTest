import { Routes } from "@angular/router";
import { HospitalComponent } from '../../intermediate2/hospital/hospital.component';
import { MedicosComponent } from '../../Intermediate/spies/medicos.component';
import { IncrementadorComponent } from '../../intermediate2/incrementer/incrementador.component';

export const ROUTES: Routes = [
    { path: 'hospital', component: HospitalComponent },
    { path: 'doctor', component: MedicosComponent },
    { path: '**', component: IncrementadorComponent }
]