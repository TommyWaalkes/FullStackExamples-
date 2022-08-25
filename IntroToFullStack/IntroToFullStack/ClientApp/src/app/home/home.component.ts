import { Component } from '@angular/core';
import { IceCream } from 'src/IceCream';
import { IceCreamService } from '../ice-cream.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  apiResult: IceCream = { name: "Loading...", flavor: "", rating: 0 };
  constructor(icService: IceCreamService) {
    //Subscribe once the API call is done running, run the code inside of subscribe 
    icService.getIceCream().subscribe(result => {
      this.apiResult = result;
      console.log(result)
    });
  }
}
