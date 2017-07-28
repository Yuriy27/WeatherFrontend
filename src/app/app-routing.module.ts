import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherComponent } from "./weather/weather.component";
import { CitiesComponent } from "./cities/cities.component";
import { HistoryComponent } from "./history/history.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/weather',
    pathMatch: 'full'
  },
  {
    path: 'weather',
    component: WeatherComponent
  },
  {
    path: 'cities',
    component: CitiesComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}