import { TestBed, inject } from '@angular/core/testing';

import { PlayerService,Player } from './player.service';

describe('PlayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerService]
    });
  });

  it('should be created', inject([PlayerService], (service: PlayerService) => {
    expect(service).toBeTruthy();
  }));

  it('should be initialized with cross', inject([PlayerService], (service: PlayerService) => {
    expect(service.currentPlayer).toEqual(Player.Cross)
  }));

  it('should swap current player to cross when circle', inject([PlayerService], (service: PlayerService) => {
    service.currentPlayer = Player.Cross;
    service.swapCurrentPlayer();
    expect(service.currentPlayer).toEqual(Player.Circle);
  }));

  it('should swap current player to circle when cross', inject([PlayerService], (service: PlayerService) => {
    service.currentPlayer = Player.Circle;
    service.swapCurrentPlayer();
    expect(service.currentPlayer).toEqual(Player.Cross);
  }));
});
