import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class ForecastTableComponent implements OnInit, OnDestroy {

  forecasts: Forecast;
  error: string;
  sub: any;

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    // this.sub = this.route.paramMap.switchMap((params: ParamMap) => {
    //   let city = params.get('city');
    //   let days = +params.get('days');
    //   let resp = this.weatherService.getForecast(city, days);
    //   return resp;
    // }).subscribe(forecasts => {
    //   this.forecasts = forecasts as Forecast;
    // });
    this.sub = this.route.params
      .subscribe(params => {
        let city = params['city'];
       let days = +params['days'];
       this.weatherService.getForecast(city, days)
        .then(forecasts => this.forecasts = forecasts)
        .catch(() => this.error = 'not found');
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
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
