import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  movieTitle = ''
 constructor(private search: SearchComponent){}

  onSearchInputChange() {
   this.search.search(this.movieTitle)
 }
}
