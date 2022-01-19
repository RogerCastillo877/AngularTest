import { FormRegister } from './form';
import { FormBuilder } from '@angular/forms';

describe('Forms test', () => {
  
    let component: FormRegister;
    beforeEach( () => component = new FormRegister( new FormBuilder() ) )
    
    it('should create a form with 2 fields email and password', () => {
      
        expect( component.form.contains('email') ).toBeTruthy();
        expect( component.form.contains('password') ).toBeTruthy();
    });
    
    it('should be required email field', () => {
      
        const control = component.form.get('email');
        control?.setValue('');

        expect( control?.valid ).toBeFalsy();
    });
    
    it('should be valid email', () => {
      
        const control = component.form.get('email');
        control?.setValue('test@mail.com');

        expect( control?.valid ).toBeTruthy();
    });
    
});
