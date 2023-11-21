import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  movieTitle=''
  constructor(private activated: ActivatedRoute) {
    this.activated.params.subscribe((data) => {
      this.movieTitle = data['movieTitle']
     })

  }

}
