import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  city: string;
  state: string;
  weather: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.city = 'Dallas';
    this.state = 'TX';
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
        imageUrl: 'http://res.cloudinary.com/culturemap-com/image/upload/q_auto/ar_4:3,c_fill,g_faces:center,w_1200/v1508855968/photos/263214_original.jpg',
        description: response['weather'][0]['description'],
        main: response['main'],
      }
    })
  }
}
