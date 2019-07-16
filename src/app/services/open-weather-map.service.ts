import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { OpenWeatherMap } from '../shared/models/open-weather-map';

@Injectable()
export class OpenWeatherMapService{
  private API = '//api.openweathermap.org/data/2.5';
  private APP_ID = '5b669da6882a16c82be715f04b21000a';
  constructor(public http: HttpClient) {}
 
  /**
   * 現在の天気を取得
   * @param city
   * returns {Observavle<OpenWeatherMap.Current>}
   */

current(city: string): Observable<OpenWeatherMap.Current>{
  let params: HttpParams = new HttpParams();
  const data = {
    appid: this.APP_ID,
    units: 'materic',
    lang: 'jp',
    q: city
  };
  Object.keys(data).forEach(function(key){
    params = params.set(key, data[key]);
  });
  return this.http.get<OpenWeatherMap.Current>('${this.API}/weather',{params});
}

/**
 * 一週間の天気予報を取得
 * @param city
 * @returns {Observable<OpenWeatherMap.WeatherForecast>}
 */

 forecast(city: string): Observable<OpenWeatherMap.Forecast>{
   let params: HttpParams = new HttpParams();
   const data = {
     appid: this.APP_ID,
     units: 'metric',
     lang: 'jp',
     cnt: 7,
     q: city
   };
   Object.keys(data).forEach(function(key){
     params = params.append(key, data[key]);
   });
   return this.http.get<OpenWeatherMap.Forecast>('${this.API}/forecast/daily',{params});
 }} 