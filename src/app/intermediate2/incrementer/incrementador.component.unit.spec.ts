import { IncrementadorComponent } from './incrementador.component';

xdescribe('Incrementador component Unit', () => {
 
    let component: IncrementadorComponent;

    beforeEach( () => component = new IncrementadorComponent() );

    it('should not pass of 100 progress', () => {
      
        component.progreso= 50;
        component.cambiarValor(5);

        expect( component.progreso ).toBe(55);
    });
    
});
