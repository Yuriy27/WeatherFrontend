import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { WeatherService } from '../services/weather.service';
import { Forecast } from '../models/openweather/api-models';

@Component({
  selector: 'app-forecast-table',
  templateUrl: './forecast-table.component.html',
  styleUrls: ['./forecast-table.component.css']
})
export class ForecastTableComponent implements OnInit {

  forecasts: Forecast;

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) => {
      let city = params.get('city');
      let days = +params.get('days');
      return this.weatherService.getForecast(city, days);
    }).subscribe(forecasts => {console.log(forecasts);this.forecasts = forecasts;});
  }

}
