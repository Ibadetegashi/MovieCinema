import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movies-app';
  date = new Date();
  profit = 5
  myClass = true
  color = ''
  setColor(_color: string) {
    this.color = _color;
    console.log(this.color);
  }
}
