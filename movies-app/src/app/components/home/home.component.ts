import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fanFavorites: any
  
  movie: any[] = []
  
  constructor(private movieService: MovieService) { }

  getFavMovies() {

    this.movieService.getFavoritesMovies().subscribe(favMovies => {
      console.log(favMovies);
      this.fanFavorites = favMovies
      this.fanFavorites = this.fanFavorites.results
      for (let fm of this.fanFavorites) {
        fm.poster_path = `https://image.tmdb.org/t/p/w440_and_h660_face${fm.poster_path}`;
        console.log(fm.poster_path);
        
      }
    })
  }
  

  ngOnInit(): void {
    this.getFavMovies();
  }

}
