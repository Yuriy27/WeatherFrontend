import { Component, OnInit } from '@angular/core';

import { HistoryService } from '../services/history.service';
import { HistoryObject } from '../models/history'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  forecasts: HistoryObject[];

  constructor(
    private historyService: HistoryService
  ) { }

  ngOnInit() {
    this.getForecasts();
  }

  getForecasts() {
    this.historyService.getHistory().then(forecasts => this.forecasts = forecasts);
  }

}
