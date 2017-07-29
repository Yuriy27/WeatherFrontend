import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { City } from '../models/city';
import { host } from '../api/api-constants'

@Injectable()
export class CitiesService {

  private headers: Headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private http: Http
  ) { }

  getDefaultCities(): Promise<City[]> {
    return this.http
      .get(`${host}/api/v1/cities`)
      .toPromise()
      .then(response => response.json() as City[]);
  }

  deleteDefaultCity(city: City): Promise<void> {
    return this.http
      .delete(`${host}/api/v1/cities/${city.Id}`, {headers: this.headers})
      .toPromise()
      .then(() => null);
  }

  addDefaultCity(city: City): Promise<void> {
    return this.http
      .post(`${host}/api/v1/cities`, JSON.stringify(city), {headers: this.headers})
      .toPromise()
      .then(() => null);
  }

  updateDefaultCity(city: City): Promise<void> {
    return this.http
      .put(`${host}/api/v1/cities`, JSON.stringify(city), {headers: this.headers})
      .toPromise()
      .then(() => null);
  }

}
