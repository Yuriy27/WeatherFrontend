import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DatePipe } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { WeatherService } from '../services/weather.service';
import { Forecast } from '../models/openweather/api-models';

@Component({
  selector: 'app-forecast-table',
  templateUrl: './forecast-table.component.html',
  styleUrls: ['./forecast-table.component.css'],
  providers: [DatePipe]
})
export class ForecastTableComponent implements OnInit {

  forecasts: Forecast;

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) => {
      let city = params.get('city');
      let days = +params.get('days');
      return this.weatherService.getForecast(city, days);
    }).subscribe(forecasts => {console.log(forecasts);this.forecasts = forecasts;});
  }

  getDate(day: number): string {  
    let millisAtDay = 86400000;
    let now = new Date(Date.now());
    let date = new Date();
    date.setTime(now.getTime() + day * millisAtDay);
    if (date.toDateString() == now.toDateString()) {
      return 'Today';
    }
    return this.datePipe.transform(date, 'dd/MM/yyyy');
  }

}
