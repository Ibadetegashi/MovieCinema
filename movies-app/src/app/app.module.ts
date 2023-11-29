import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfitPipe } from './pipes/profit.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { DetailsMoviesComponent } from './components/details-movies/details-movies.component';
import { DetailsReviewsComponent } from './components/details-reviews/details-reviews.component';
import { DetailsActorsComponent } from './components/details-actors/details-actors.component';
import { SearchComponent } from './components/search/search.component';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {HttpClientModule} from '@angular/common/http';
import { MovieListComponent } from './components/movie-list/movie-list.component'
@NgModule({
  declarations: [
    AppComponent,
    ProfitPipe,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    DetailsComponent,
    DetailsMoviesComponent,
    DetailsReviewsComponent,
    DetailsActorsComponent,
    SearchComponent,
    NotFoundComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SearchComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
