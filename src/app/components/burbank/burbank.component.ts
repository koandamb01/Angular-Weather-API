import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  city: string;
  state: string;
  weather: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.city = 'Burbank';
    this.state = 'CA';
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
        imageUrl: 'https://cdn.flixbus.de/2018-07/burbank-palm-trees.jpeg',
        description: response['weather'][0]['description'],
        main: response['main'],
      }
    })
  }
}
