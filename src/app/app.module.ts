import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableBoardComponent } from './table-board/table-board.component';
import { BoardFieldComponent } from './board-field/board-field.component';

import { PlayerService } from './player.service';
import { GameService } from './game.service';

@NgModule({
  declarations: [
    AppComponent,
    TableBoardComponent,
    BoardFieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PlayerService,
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
