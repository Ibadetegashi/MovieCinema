import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  movieTitle = ''
  searchResults: any[] = []
  trailer = ''
  
  constructor(private activated: ActivatedRoute,private movieService:MovieService) {
    this.activated.params.subscribe((data) => {
      this.movieTitle = data['movieTitle']
     })
  }
  ngOnInit(): void {
    this.getSearchResults()
  }

  getSearchResults() {
    this.movieService.getSearchResults().subscribe(data => {
      this.searchResults = data;
      console.log(this.searchResults);
    }, error => {
      console.log(error);
    })
  }
  
  getTrailer(url: string) {
    this.trailer = url;

    
  }

}
