import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  city: string;
  state: string;
  weather: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.city = 'Washington';
    this.state = 'DC';
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
        imageUrl: 'https://washington-org.s3.amazonaws.com/s3fs-public/hero-image-lincoln-memorial-in-summer.jpg',
        description: response['weather'][0]['description'],
        main: response['main'],
      }
    })
  }
}
