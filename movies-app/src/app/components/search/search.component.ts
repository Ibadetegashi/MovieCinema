import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  movieTitle = ''
  searchResults: any[] = []
  trailer:SafeResourceUrl | undefined
  
  constructor(private activated: ActivatedRoute,private movieService:MovieService,private sanitizer: DomSanitizer) {
    this.activated.params.subscribe((data) => {
      this.movieTitle = data['movieTitle']
     })
  }
  
  ngOnInit(): void {
    this.getSearchResults()
  }

  getTrailer(url: string) {
    this.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  onModalHidden(): void {
    this.trailer = this.sanitizer.bypassSecurityTrustResourceUrl('');
  }
    

  getSearchResults() {
    this.movieService.getSearchResults().subscribe(data => {
      this.searchResults = data;
      console.log(this.searchResults);
    }, error => {
      console.log(error);
    })
  }

}
