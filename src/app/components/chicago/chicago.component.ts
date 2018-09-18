import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  city: string;
  state: string;
  weather: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.city = 'Chicago';
    this.state = 'IL';
    this.weather = {
      imageUrl: "",
      description: "",
      main: ""
    }
    this.getWeatherForcast()
  }

  getWeatherForcast() {
    let observe = this._httpService.getWeatherForcast(this.city, this.state);
    observe.subscribe(response => {
      this.weather = {
        imageUrl: 'https://as1.ftcdn.net/jpg/00/64/30/32/500_F_64303254_AY5KPQo2J9zwc8IdRXl5dgoFnHByCW8C.jpg',
        description: response['weather'][0]['description'],
        main: response['main'],
      }
    })
  }
}
