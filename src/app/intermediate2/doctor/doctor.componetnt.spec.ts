import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoctorComponent } from './doctor.component';
import { DoctorService } from './doctor.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('should first', () => {
  
    let component: DoctorComponent;
    let fixture: ComponentFixture<DoctorComponent>;

    beforeEach( () => {

        TestBed.configureTestingModule({
            declarations: [DoctorComponent],
            providers: [ DoctorService ],
            imports: [ HttpClientTestingModule ]
        });

        fixture = TestBed.createComponent( DoctorComponent );
        component = fixture.componentInstance;
        
    })

    it('should be create the component', () => {
      
        expect( component ).toBeTruthy();
    });

    it('should return doctor\'s name', () => {
      
        const name = 'Carlo';
        const res = component.greetDoctor( name )

        expect( res ).toContain( name );
    });
    
    
});
