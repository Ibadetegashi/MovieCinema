import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  movieTitle = ''
  searchResults: any
  trailer:SafeResourceUrl | undefined
  
  constructor(private activated: ActivatedRoute,private movieService:MovieService,private sanitizer: DomSanitizer) {
    this.activated.params.subscribe((data) => {
      this.movieTitle = data['movieTitle']
      this.search()
     })
  }


  search() {
    this.movieService.search(this.movieTitle).subscribe(res => {
      console.log(res);
      this.searchResults = res
      this.searchResults = this.searchResults.results
      for (let movie of this.searchResults) {
          movie.poster_path = `https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`;
      }
    })
  }

                     

  getTrailer(url: string) {
    this.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  onModalHidden(): void {
    this.trailer = this.sanitizer.bypassSecurityTrustResourceUrl('');
  }
    

  // getSearchResults() {
  //   this.movieService.getSearchResults().subscribe(data => {
  //     this.searchResults = data;
  //     console.log(this.searchResults);
  //   }, error => {
  //     console.log(error);
  //   })
  // }

}
