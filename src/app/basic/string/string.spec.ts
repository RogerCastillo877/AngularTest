import { message } from './string';

describe('Test of string', () =>{

    it('Should return a string', () => {
        
        const resp = message('Rocas');

        expect( typeof resp ).toBe( 'string' );
    });


    it('should return a greeting with name', () => {
      
        const name = 'Juuan'
        const resp = message( name );

        expect( resp ).toContain( name )
    });
    
});
