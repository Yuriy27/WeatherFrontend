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
    // var c = [
    //   {
    //     id: 1,
    //     name: 'city1'
    //   },
    //   {
    //     id: 2,
    //     name: 'city2'
    //   },
    //   {
    //     id: 3,
    //     name: 'city3'
    //   }
    // ];
    // return c;
    var resp = this.http.get('http://localhost:53545/api/v1/cities')
      .toPromise()
      .then(response => {
        console.log('resp: ', response);
        console.log('json: ', response.json());
        console.log('json.data: ', response.json().data);
        console.log('json.data as city[]: ', response.json().data as City[]);
        return response.json() as City[]
      });

    return resp;
  }

}
