import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smrt-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  hidden = [true, true, true, true, true, true, true, true, true, true];

  constructor() {
    this.hidden =  [true, true, true, true, true, true, true, true, true, true];

    this.hidden[Math.floor((Math.random() * 9))] = false;
  }

  ngOnInit() {
  }

}
