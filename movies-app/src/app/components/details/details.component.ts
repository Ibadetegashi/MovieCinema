import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  movieId = ''
constructor(private _activatedRoute: ActivatedRoute) {
  this._activatedRoute.params.subscribe(data => {
    this.movieId = data['id']
    console.log('id='+ this.movieId);
  })
}
}
