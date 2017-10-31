import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-board-field',
  templateUrl: './board-field.component.html',
  styleUrls: ['./board-field.component.css']
})
export class BoardFieldComponent implements OnInit {
  @Input() x:Number;
  @Input() y:Number;
  figure : string = "none";


  constructor() { }

  ngOnInit() {
  }
  
  fillWithFigure(data){
    console.log("change figure at ("+this.x+","+this.y+") from "+this.figure)
    if(this.figure == "none" || this.figure == "circle" ){
      
      this.figure = "cross";      
    }
    else{
      this.figure = "circle";     
    }  
    console.log("change figure to "+this.figure)
  }
}
