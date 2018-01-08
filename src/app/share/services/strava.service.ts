import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StravaService {
  private apiURL = 'https://www.strava.com/api/v3';
  private TOKEN = 'dcf7b87465d61615cb0054cee6ccb9f34d64cd82';

  constructor(private http: HttpClient) {
  }

  getAthlete(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + this.TOKEN);
    return this.http.get(`${this.apiURL}/athlete`,
      {headers: headers}
    );
  }

}
