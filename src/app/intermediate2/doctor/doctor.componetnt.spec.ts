import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoctorComponent } from './doctor.component';

describe('should first', () => {
  
    let component: DoctorComponent;
    let fixture: ComponentFixture<DoctorComponent>;

    beforeEach( () => {

        TestBed.configureTestingModule({
            declarations: [DoctorComponent]
        });

        fixture = TestBed.createComponent( DoctorComponent );
        component = fixture.componentInstance;
    })

    it('should first', () => {
      ;
    });
    
});
