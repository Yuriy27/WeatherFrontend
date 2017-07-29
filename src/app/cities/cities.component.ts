import { Component, OnInit } from '@angular/core';

import { CitiesService } from '../services/cities.service';

import { City } from '../models/city';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  cities: City[];
  newCityName: string;
  updateCityName: string;

  constructor(
    private citiesService: CitiesService
  ) { }

  ngOnInit() {
    this.getCities();
  }

  getCities() {
    this.citiesService.getDefaultCities()
      .then(cities => {
        this.cities = cities;
        this.newCityName = '';
      });
  }

  deleteCity(city: City) {
    this.citiesService.deleteDefaultCity(city).then(() => this.getCities());
  }

  updateCity(city: City) {
    this.citiesService.updateDefaultCity(city).then(() => this.getCities()).catch(() => this.getCities());
  }

  addCity() {
    let city = new City();
    city.Name = this.newCityName;
    this.citiesService.addDefaultCity(city).then(() => this.getCities()).catch(() => this.getCities());;
  }

}
