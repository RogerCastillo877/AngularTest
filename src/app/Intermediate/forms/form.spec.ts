import { FormRegister } from './form';
import { FormBuilder } from '@angular/forms';

describe('Forms test', () => {
  
    let component: FormRegister;
    beforeEach( () => component = new FormRegister( new FormBuilder() ) )
    
    it('should create a form with 2 fields email and password', () => {
      
        expect( component.form.contains('email') ).toBeTruthy();
        expect( component.form.contains('password') ).toBeTruthy();
    });
    
});
