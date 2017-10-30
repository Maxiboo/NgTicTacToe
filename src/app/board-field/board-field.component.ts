import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-field',
  templateUrl: './board-field.component.html',
  styleUrls: ['./board-field.component.css']
})
export class BoardFieldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  field ={
    imageUrl : '../assets/images/cross-field.png'
  }
}
