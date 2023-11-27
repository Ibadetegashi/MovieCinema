import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-details-actors',
  templateUrl: './details-actors.component.html',
  styleUrls: ['./details-actors.component.scss']
})
export class DetailsActorsComponent{
 @Input() actor: any











  // ngOnInit(): void {
  //   this.getActors();
  // }
  

  // getActors() {
  //   this.movieService.getActors().subscribe(data => {
  //     this.actors = data;
  //     console.log(this.actors);
  //   });
  // }

 


}
