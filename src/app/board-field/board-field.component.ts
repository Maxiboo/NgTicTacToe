import { Component, Input } from '@angular/core';
import { PlayerService } from '../player.service';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board-field',
  templateUrl: './board-field.component.html',
  styleUrls: ['./board-field.component.css']
})
export class BoardFieldComponent {
  @Input() x:number;
  @Input() y:number;
  figure : string = "none";

  constructor(private playerService: PlayerService, private gameService: GameService) {

  }
  
  fillWithFigure(data){
    console.debug("change figure at (" + this.x + "," + this.y + ") from " + this.figure)
    this.playerService.isPlayerOne;

    if (this.figure === "none") {
      this.figure = this.playerService.isPlayerOne ? "cross" : "circle"
      this.gameService.gameBoardState[this.x * 3 + this.y] = this.playerService.isPlayerOne;

      this.playerService.isPlayerOne = !this.playerService.isPlayerOne;

      if (this.gameService.checkEndGame()) {
        console.log("FIN DU JEU !!!!!");
      }
    }
    
    console.debug("change figure to "+this.figure)
  }
}
