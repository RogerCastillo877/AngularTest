import { userLogin } from './booleans';
describe('should be boolean', () => {
    
    it('should return true', () => {

        const res = userLogin();

        expect( res ).toBeTrue();
    });
    
});
