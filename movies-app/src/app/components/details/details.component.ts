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

  reviews: any
  similarMovies:any
  
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
      this.getSimilar();
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
         if (!cast.profile_path) {
         cast.profile_path="https://media.istockphoto.com/id/1473780957/vector/default-avatar-profile-user-profile-icon-business-people-profile-picture-portrait-user.jpg?s=612x612&w=0&k=20&c=r4mWzcW0g6MDjfl6I-1DoaAVYCuhJWtaEgYMDcBob-U="
        //cast.profile_path=null
         } else {
             cast.profile_path = 'https://image.tmdb.org/t/p/w440_and_h660_face' + cast.profile_path
            console.log(cast.profile_path);
            }
          
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

  getSimilar() {
    this.movieService.getSimilar(this.activeRoute).subscribe(res => { 
      console.log(res);
      this.similarMovies = res;
      this.similarMovies = this.similarMovies.results
       for (let similar of this.similarMovies) {
        similar.poster_path = `https://image.tmdb.org/t/p/w440_and_h660_face${similar.poster_path}`;
      }
    })
  }
  

  
 
}
