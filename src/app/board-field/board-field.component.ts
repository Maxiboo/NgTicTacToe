import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PlayerService, Player } from '../player.service';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board-field',
  templateUrl: './board-field.component.html',
  styleUrls: ['./board-field.component.css']
})
export class BoardFieldComponent {
  @Input() x:number;
  @Input() y: number;
  @Output() playerMove: EventEmitter<any> = new EventEmitter();
  playerOnThisField: Player = Player.None;
  figureClass : string = "none";

  constructor(private playerService: PlayerService, private gameService: GameService) {

  }
  
  fillWithFigure(data){
    if (this.playerOnThisField === Player.None) {

      this.playerOnThisField = this.playerService.currentPlayer;
      this.gameService.gameBoardState[this.x * 3 + this.y] = this.playerOnThisField;
      this.playerService.swapCurrentPlayer();

      if (this.gameService.checkEndGame()) {
        console.log("FIN DU JEU !!!!!");
      }
    }
  }

  private getPlayerFigureClass(): string {
    if (this.playerOnThisField === Player.Cross)
      return "cross";
    if (this.playerOnThisField === Player.Circle)
      return "circle";
    return "none";
  }
}
