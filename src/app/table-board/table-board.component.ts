import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-board',
  templateUrl: './table-board.component.html',
  styleUrls: ['./table-board.component.css']
})
export class TableBoardComponent implements OnInit {

  xCoordinates: Number[] = [0, 1, 2];
  yCoordinates: Number[] = [0, 1, 2];

  constructor() { }

  ngOnInit() {
  }

}
