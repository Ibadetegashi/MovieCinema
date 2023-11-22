import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  fanFavorites: any[] = [
    {
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/7d/Landscape_with_invisible_hand_poster.png",
      title: "The Invisible Hand",
      description: "The Invisible Hand is a 1997 non-fiction",
      year: 1999,
      trophy: 1,
      rate: 9
    },
    {
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/7d/Landscape_with_invisible_hand_poster.png",
      title: "The Invisible Hand",
      description: "The Invisible Hand is a 1997 non-fiction",
      year: 1999,
      trophy: 1,
      rate: 9
    },
    {
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
      title: "The Invisible Hand",
      description: "The Invisible Hand is a 1997 non-fiction",
      year: 1999,
      trophy: 1,
      rate: 9
    },
     {
    imageUrl: "https://i.pinimg.com/originals/00/7e/70/007e70673ee6b2e384782b7d027b0cc0.jpg",
    title: "Inception",
    description: "Inception is a mind-bending science fiction thriller.",
    year: 2010,
    trophy: 2,
    rate: 8.7
  },
  {
    imageUrl: "https://m.media-amazon.com/images/I/51rXi2SXCXL._AC_UF894,1000_QL80_.jpg",
    title: "The Shawshank Redemption",
    description: "The Shawshank Redemption is a classic drama film.",
    year: 1994,
    trophy: 3,
    rate: 9.3
  },
  {
    imageUrl: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg",
    title: "The Matrix",
    description: "The Matrix is a groundbreaking science fiction action film.",
    year: 1999,
    trophy: 1,
    rate: 8.7
  }

]
}
