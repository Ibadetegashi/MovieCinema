import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class MovieService {

    private apiKey = '3be70d043ea9a89fecd2a6faff403213';
  private apiUrl = 'https://api.themoviedb.org/3/movie';

  constructor(private http: HttpClient) { }

  getTopMovies() {
    return this.http.get<any[]>('assets/data/topMovies.json');
  }

  getFavoritesMovies() {
    return this.http.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}`);
  }

  getActors() {
    return this.http.get<any[]>('assets/data/actors.json');
  }

  // getReviews() {
  //   return this.http.get<any[]>('assets/data/review.json');
  // }

  getSimilarMovies() {
    return this.http.get<any[]>('assets/data/similarMovies.json')
  }

  getSearchResults() {
    return this.http.get<any[]>('assets/data/search.json')
  }

  getPopularMovies() {
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US`)
  }
  getAllMovies() {
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc`)
  }
  
 getMovieDetails(movieId: number) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${this.apiKey}&language=en-US`;
  return this.http.get(url);
  }
   getMovieById(id: number) {
    const url = `${this.apiUrl}/${id}?api_key=${this.apiKey}&language=en-US`;
    return this.http.get(url);
   }
  getTrailer(movieId:number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${this.apiKey}&language=en-US`)
  }

  getReviews(movie_id:number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${this.apiKey}`)
  }

  getSimilar(movie_id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${this.apiKey}`)
  }

  search(searchQuery:string) {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${searchQuery}`)
  }
}
