import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { RouterDoctorComponent } from './router-doctor.component';

class FakeRouter {

  navigate( params: any ) {
  }
}

class FakeActivatedRouter {
  // params: Observable<any> = new Observable();

  private subject = new Subject();

  push( value: any ) {
    this.subject.next( value )
  }

  get params() {
    return this.subject.asObservable();
  }
}

describe('RouterDoctorComponent', () => {
  let component: RouterDoctorComponent;
  let fixture: ComponentFixture<RouterDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterDoctorComponent ],
      providers: [
        { provide: Router, useClass: FakeRouter},
        { provide: ActivatedRoute, useClass: FakeActivatedRouter },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should redirect to doctor when saved', () => {
    
    const router = TestBed.get(Router);
    const spy = spyOn( router, 'navigate' );

    component.saveDoctor();

    expect(spy).toHaveBeenCalledWith( ['doctor', '123'] );
  });

  it('should put the id = new', () => {
    
    component = fixture.componentInstance;

    const activatedRoute : FakeActivatedRouter = TestBed.get( ActivatedRoute )

    activatedRoute.push( {id: 'new'} );

    expect( component.id ).toBe( 'new' );
  });
  
});
