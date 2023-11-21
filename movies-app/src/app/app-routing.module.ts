import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
    {
        path: '',
      component: HomeComponent
    },
    {
        path: 'details/:id',
        component: DetailsComponent
    },
    {
      path: 'search/:movieTitle',
      component: SearchComponent
    }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }