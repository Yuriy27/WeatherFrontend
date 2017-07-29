import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { CitiesService } from './services/cities.service';
import { HistoryService } from './services/history.service';
import { WeatherService } from './services/weather.service';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { CitiesComponent } from './cities/cities.component';
import { HistoryComponent } from './history/history.component';
import { ForecastTableComponent } from './forecast-table/forecast-table.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    CitiesComponent,
    HistoryComponent,
    ForecastTableComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [CitiesService, HistoryService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
