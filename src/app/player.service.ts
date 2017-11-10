import { Injectable } from '@angular/core';

@Injectable()
export class PlayerService {
  currentPlayer :Player = Player.Cross;

  constructor() { }

  swapCurrentPlayer(): void {
    if (this.currentPlayer === Player.Cross)
      this.currentPlayer = Player.Circle;
    else if (this.currentPlayer === Player.Circle)
      this.currentPlayer = Player.Cross;
  }
  
}

export enum Player {
  None,
  Cross,
  Circle
}
