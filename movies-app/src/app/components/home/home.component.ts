import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fanFavorites: any[] = []
  
  movie: any[] = []
  
  constructor(private movieService: MovieService) { }
  

  ngOnInit(): void {
    this.movieService.getTopMovies().subscribe(data => {
      this.movie = data;
      console.log(this.movie);
    }, error => {
      console.log(error);
    });
    this.movieService.getFavoritesMovies().subscribe(data => {
      this.fanFavorites = data;
      console.log(this.fanFavorites);
    }, error => {
      console.log(error);
    })

  }

}
