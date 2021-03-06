import { OpenWeatherMapService } from './services/open-weather-map.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
/**import { HttpModule } from '@angular/http'; */

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatProgressBarModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatInputModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AreaEditComponent } from './area-edit/area-edit.component';
import { ForecastComponent } from './forecast/forecast.component';
import { UnixTimeDatePipe } from './pipes/unix-time-date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AreaEditComponent,
    ForecastComponent,
    UnixTimeDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    /**HttpModule,*/
    AppRoutingModule,

    BrowserAnimationsModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [
    OpenWeatherMapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
