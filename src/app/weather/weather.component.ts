import { Component, OnInit } from '@angular/core';

import { CitiesService } from '../services/cities.service';
import { WeatherService } from '../services/weather.service';

import { City } from '../models/city';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  cities: City[];
  selectedCity: string;
  typedCity: string = '';
  days: number = 1;

  constructor(
    private citiesService: CitiesService,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.getCities();
  }

  getCities(): void {
    this.citiesService.getDefaultCities()
      .then(cities => {
        this.cities = cities;
        this.selectedCity = (this.cities === undefined ? '' : this.cities[0].Name);
      });
    
  }

  viewForecast() {
    let cityQuery = this.selectedCity;
    if (this.typedCity.trim() !== '') {
      cityQuery = this.typedCity;
    }

  }

}
