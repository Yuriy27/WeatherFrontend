import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Forecast } from '../models/openweather/api-models';
import { host } from '../api/api-constants';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeatherService {

  constructor(
    private http: Http
  ) { }

  getForecast(city: string, days: number): Promise<Forecast> {
    return this.http.get(`${host}/api/v1/forecast/${city}/${days}`)
      .toPromise()
      .then(response => response.json() as Forecast);
  }

}
