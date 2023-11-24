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
}//e kam marr id prej rutit activ edhe e kom ru te movieId
  
  stars = ['Star 1']
  directories = ['Director 1', 'Director 2','Directory']
  genres = ['Comedy', 'Romance','Thriller','Drama']
}
