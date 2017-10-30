import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableBoardComponent } from './table-board/table-board.component';
import { BoardFieldComponent } from './board-field/board-field.component';

@NgModule({
  declarations: [
    AppComponent,
    TableBoardComponent,
    BoardFieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
