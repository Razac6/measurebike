import {Component, OnInit} from '@angular/core';
import {SaddleModel} from '../../../models/saddle.model';

@Component({
  selector: 'app-saddle',
  templateUrl: './saddle.component.html',
  styleUrls: ['./saddle.component.scss']
})
export class SaddleComponent implements OnInit {
  message: SaddleModel = {
    name: 'Evoke 1.5',
    brand: 'Bontrager',
    width: 10,
    height: 5,
  };
  constructor() {
  }

  ngOnInit() {
    console.log(this.message.name);
  }




}
