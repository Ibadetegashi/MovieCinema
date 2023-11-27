import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data, error } from 'jquery';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{

  activeRoute = ''
  selectedMovie: any
  moviesList:any
constructor(private _activatedRoute: ActivatedRoute,private movieService: MovieService) {
  this._activatedRoute.params.subscribe(data => {
    this.activeRoute = data['title']
    console.log('title='+ this.activeRoute);
  })
  }//e kam marr title parametrin :title prej rutit activ edhe e kom ru te activeRoute
   getMovie() {
     this.movieService.getMovies().subscribe(data => {
       this.moviesList = data;
       console.log(this.moviesList.results);
       for (let movie of this.moviesList.results) {
         if (movie.title == this.activeRoute) {
           this.selectedMovie = movie
           console.log(this.selectedMovie);
        }
      }

       
     }, error => {
       console.log('errori '+error);
     })
  }
  ngOnInit(): void {
      this.getMovie();
  }
  
  stars = ['Star 1']
  directories = ['Director 1', 'Director 2','Directory']
  genres = ['Comedy', 'Romance', 'Thriller', 'Drama']
  
 
}
