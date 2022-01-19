import { Player } from './class';

describe('Class tests', () => {

    let player = new Player();

    beforeAll( () => {
        // console.log('beforeAll');      
    });
    beforeEach( () => {
        // console.log('beforeEach'); 
        // player.hp = 100
        player = new Player();
    });
    afterAll( () => {
        // console.log('afterAll');      
    });
    afterEach( () => {
        // console.log('afterEach');
        // player.hp = 100     
    });
  
    it('should return hp 80 if get 20 of damage', () => {
      
        // const player = new Player();
        const res = player.getDamage(20)

        expect( res ).toBe(80);
    });
    
    it('should return hp 50 if get 50 of damage', () => {
      
        // const player = new Player();
        const res = player.getDamage(50)

        expect( res ).toBe(50);
    });
    
    it('should return hp 100 if get 0 of damage', () => {
      
        // const player = new Player();
        const res = player.getDamage(100)

        expect( res ).toBe(0);
    });
    
});
