import { Injectable } from '@angular/core';
import { Player } from './player.service';

@Injectable()
export class GameService {

  gameBoardState: Player[] = [Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None, Player.None]
  victoryPlayer: string = "";

  constructor() { }

  checkEndGame(): boolean {
    if (this.gameBoardState.indexOf(Player.None) === -1)
      return true;

    return false;
  }

  GetVictoryPlayer(): string {
    return this.victoryPlayer;
  }
}
