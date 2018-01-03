import { Component, OnInit } from '@angular/core';
import { SaddleModel } from '../../../models/saddle.model';
import { PartsService } from '../../../share/services/parts.service';
import { PartModel } from '../../../models/part.model';

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

  result: PartModel;

  constructor(private partsService: PartsService) {
  }

  ngOnInit() {
    return this.partsService.getPart().subscribe(data => {
      this.result = data;
      console.log(this.result);
    });
  }




}
