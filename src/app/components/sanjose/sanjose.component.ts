import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  city: string;
  state: string;
  weather: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.city = 'San Jose';
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
      console.log("data: " + JSON.stringify(response));
      this.weather = {
        imageUrl: 'https://images.pexels.com/photos/258447/pexels-photo-258447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        description: response['weather'][0]['description'],
        main: response['main'],
      }
    })
  }
}
