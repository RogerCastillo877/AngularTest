import { Component, OnInit } from '@angular/core';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styles: [
  ]
})
export class DoctorComponent implements OnInit {

  doctors: any[] = [];

  constructor( public _doctorService: DoctorService ) { }

  ngOnInit(): void {
  }

  greetDoctor(name: string) {
    return `Hola ${ name }`;
  }

  obtenerDoctors() {

    this._doctorService.getDoctors()
      .subscribe( (doctors: any ) => this.doctors = doctors )
  }
}
