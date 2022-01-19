import { Player2 } from './player2';

describe('Player 2 emit', () => {
  
    let player: Player2;

    beforeEach( () => player = new Player2() );

    it('should emit event when receibe damage', () => {
      
        let newHP = 0;

        player.hpChange.subscribe( hp =>{
            newHP = hp
        });

        player.getDamage(1000);

      expect( newHP ).toBe(0);

    });
    
    it('should emit event when receibe damage and survive if it is less than 100', () => {
      
        let newHP = 0;

        player.hpChange.subscribe( hp =>{
            newHP = hp
        });

        player.getDamage(50);

      expect( newHP ).toBe(50);

    });
    
});
