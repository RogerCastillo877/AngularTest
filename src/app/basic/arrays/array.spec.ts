import { getRobots } from './arrays';

xdescribe('Arrays tests', () => {
  
    it('should return almost 3 robots', () => {
      
        const res = getRobots();

        expect( res.length ).toBeGreaterThanOrEqual(3);
    });
    
    it('should exist r2d2 and MegaMan', () => {
      
        const res = getRobots();

        expect( res ).toContain('r2d2');
        expect( res ).toContain('MegaMan');
    });
    
});
