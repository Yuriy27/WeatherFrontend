import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { City } from '../models/city';
import { host } from '../api/api-constants'

@Injectable()
export class CitiesService {

  constructor(
    private http: Http
  ) { }

  getDefaultCities(): Promise<City[]> {
    return this.http.get(`${host}/api/v1/cities`)
      .toPromise()
      .then(response => response.json() as City[]);
  }

}
