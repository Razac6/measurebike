import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PartModel } from '../../models/part.model';
import 'rxjs/add/operator/map';


@Injectable()
export class PartsService {

  constructor(private http: HttpClient) {
  }

  getPart() {
    return this.http.get<PartModel>(`http://localhost:1337/test`)
  }

}
