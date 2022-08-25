import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IceCream } from 'src/IceCream';

@Injectable({
  providedIn: 'root'
})
export class IceCreamService {
  url: string;
  api: HttpClient;
  //this @inject will auto detect the URL of our web server 
  //The URL may change so this is the preferred way of grabbing it
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.url = baseUrl;
    this.api = http;
  }

  getIceCream(): Observable<IceCream> {
    console.log(this.url + "weatherforecast/icecream");
    //the <string> means cast the response to a string, this can be done for any datatype 
    return this.api.get<IceCream>(this.url + "weatherforecast/icecream");
  }
}
