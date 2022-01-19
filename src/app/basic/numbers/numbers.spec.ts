import { increment } from './numbers';

describe('Numbers test', () => {
  
    it('should return 100, if enter number is bigger than 100', () => {
      
      const res = increment(300);

      expect( res ).toBe(100);
    });
    
    it('should return enter number + 1', () => {
      
      const res = increment(50);

      expect( res ).toBe(51);
    });
    

});
