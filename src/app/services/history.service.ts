import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { HistoryObject } from '../models/history';
import { host } from '../api/api-constants'

@Injectable()
export class HistoryService {

  constructor(
    private http: Http
  ) { }

  getHistory(): Promise<HistoryObject[]> {
    return this.http
      .get(`${host}/api/v1/history`)
      .toPromise()
      .then(response => response.json() as HistoryObject[]);
  }

}
