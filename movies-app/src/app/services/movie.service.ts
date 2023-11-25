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


}
