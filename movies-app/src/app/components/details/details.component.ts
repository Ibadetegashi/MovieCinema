import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { data, error } from 'jquery';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{

  activeRoute : any
  selectedMovie: any
  movieCredist:any
  moviesList: any
  actorsOfSelectedMovie: any
  crewMovie: any
  trailer: any
  safeTrailer: any 

  reviews:any
  
constructor(private _activatedRoute: ActivatedRoute,private movieService: MovieService,private sanitizer: DomSanitizer) {
  this._activatedRoute.params.subscribe(data => {
    this.activeRoute = data['id']
    console.log('title='+ this.activeRoute);
  })
  }//e kam marr id parametrin :id prej rutit activ edhe e kom ru te activeRoute
    ngOnInit(): void {
    this.getMovie();
    this.getActors()
      this.getTrailerKey();
      this.getReview();
  }
  getMovie() {
      this.movieService.getMovieById(this.activeRoute).subscribe(movie => {
        this.selectedMovie = movie
        console.log(movie);
      }, error => {
        console.log(error);
      })
  }

  getActors() {
     this.movieService.getMovieDetails(this.activeRoute).subscribe(movie => {
          this.movieCredist=movie
          this.actorsOfSelectedMovie = this.movieCredist.cast
          for (let cast of this.movieCredist.cast) {
            cast.profile_path = 'https://image.tmdb.org/t/p/w440_and_h660_face'+cast.profile_path
       }
        }, error => {
        console.log(error);
      })
  }

  getTrailerKey() {
    this.movieService.getTrailer(this.activeRoute).subscribe(trailer => {
      this.trailer = trailer
      console.log(this.trailer.results[0].key);
      this.safeTrailer = `https://www.youtube.com/embed/${this.trailer.results[0].key}?`
    })
  }
  
  safeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getGenres(): string {
  return this.selectedMovie.genres.map((genre:any) => genre.name).join(', ');
  }
  
  getReview() {
    this.movieService.getReviews(this.activeRoute).subscribe(res => {
      this.reviews = res
      this.reviews = this.reviews.results
      console.log(this.reviews);
    })
  }
  
  stars = ['Star 1']
  directories = ['Director 1', 'Director 2','Directory']
  genres = ['Comedy', 'Romance', 'Thriller', 'Drama']
  
 
}
