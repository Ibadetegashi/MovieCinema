import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.component.html',
  styleUrls: ['./details-movies.component.scss']
})
export class DetailsMoviesComponent {

  @Input() similarMovie:any

  // similarMovies: any[] = []
  // constructor(private movieService: MovieService) { }
  // ngOnInit(): void {
  //   this.getSimilarMovies()
  // }
  
  // getSimilarMovies() {
  //   this.movieService.getSimilarMovies().subscribe(data => {
  //     this.similarMovies = data;
  //   }, error => {
  //     console.log(error);
  //   })
  // }
}
