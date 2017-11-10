import { Injectable } from '@angular/core';
import { Player } from './player.service';

@Injectable()
export class GameService {

  gameBoardState: Player[][] = [
    [Player.None, Player.None, Player.None],
    [Player.None, Player.None, Player.None],
    [Player.None, Player.None, Player.None]
  ];
  victoryPlayer: string = "";
  lastMoveCoordinateX: number;
  lastMoveCoordinateY: number;

  constructor() { }

  checkEndGame(): boolean {
    if(this.checkLastMoveVictory() !== Player.None)
      return true;
    if (this.gameBoardState.every(line => line.every(element => element != Player.None)))
      return true;
    
    return false;
  }

  checkLastMoveVictory(): Player {
    var playerMove = this.gameBoardState[this.lastMoveCoordinateX][this.lastMoveCoordinateY];
    
    var checkColumn = this.gameBoardState[this.lastMoveCoordinateX];
    if (checkColumn.every(element => element === playerMove)) return playerMove;

    var checkLine = this.gameBoardState.map(function(value,index) { return value[this.lastMoveCoordinateY]; }.bind(this));
    if (checkLine.every(element => element === playerMove)) return playerMove;

    var checkDiagonal1 = this.gameBoardState.map(function(value,index) { return value[index]; }); 
    if (checkDiagonal1.every(element => element === playerMove)) return playerMove;

    var checkDiagonal2 = this.gameBoardState.map(function(value,index) { return value[value.length - index - 1]; }) ;
    if (checkDiagonal2.every(element => element === playerMove)) return playerMove;

    return Player.None;
  }

  GetVictoryPlayer(): string {
    return this.victoryPlayer;
  }
}
