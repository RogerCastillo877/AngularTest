import { ROUTES } from './app.routes';
import { MedicosComponent } from '../../Intermediate/spies/medicos.component';

describe('Main routes', () => {
  
    it('should be exist the route/doctor/:id', () => {
      
        expect( ROUTES ).toContain({
            path: 'doctor',
            component: MedicosComponent
        })
    });
    
});
