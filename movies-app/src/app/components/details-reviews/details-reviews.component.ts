import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrls: ['./details-reviews.component.scss']
})
export class DetailsReviewsComponent implements OnInit {
  review: any[] = [];
  
  constructor(private movieService: MovieService) { }
  ngOnInit(): void {
    this.getReviews()
  }
  
  getReviews() {
    this.movieService.getReviews().subscribe(data => {
      this.review = data;
    }, error => {
      console.log(error);
    })
  }
}
