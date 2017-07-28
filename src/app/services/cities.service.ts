import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { City } from '../models/city';

@Injectable()
export class CitiesService {

  constructor(
    private http: Http
  ) { }

  getDefaultCities(): Promise<City[]> {
    return this.http.get('http://localhost:53545/api/v1/cities')
      .toPromise()
      .then(response => response.json() as City[]);
  }

}
