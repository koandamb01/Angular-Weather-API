import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getWeatherForcast(city, state) {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + state + ',us&appid=fd7ac0e458d00a2113098038f1ca4e9d')
  }
}
