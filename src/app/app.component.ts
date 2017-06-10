import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
   title = 'Tour of Heroes';
  }
