import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getTopMovies() {
    return this.http.get<any[]>('assets/data/topMovies.json');
  }

  getFavoritesMovies() {
    return this.http.get<any[]>('assets/data/fanFavorites.json');
  }

  getActors() {
    return this.http.get<any[]>('assets/data/actors.json');
  }

  getReviews() {
    return this.http.get<any[]>('assets/data/review.json');
  }

  getSimilarMovies() {
    return this.http.get<any[]>('assets/data/similarMovies.json')
  }

  getSearchResults() {
    return this.http.get<any[]>('assets/data/search.json')
  }

  getMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=82e309254331f8d8f952fabdb0d32305&language=en-US')
  }
}
