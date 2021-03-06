import { Component, OnInit } from '@angular/core';
import { SaddleModel } from '../../../models/saddle.model';
import { PartsService } from '../../../share/services/parts.service';
import { PartModel } from '../../../models/part.model';
import { StravaService } from '../../../share/services/strava.service';

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

  public result: PartModel;

  constructor(private partsService: PartsService, private stravaService: StravaService) {
  }

  ngOnInit() {
    // return this.partsService.getPart().subscribe(data => {
    //   this.result = data;
    //   console.log(this.result);
    // });

    return this.stravaService.getAthlete().subscribe(data => {
      this.result = data;
      console.log(this.result);
    });
  }




}
