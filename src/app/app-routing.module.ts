import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { MovieComponent } from './movie/movie.component';

import { CategoriesComponent } from './categories/categories.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'movie-add',
    component: MovieAddComponent
  },
  {
    path: 'movie-edit/:movieId',
    component: MovieEditComponent
  },
  {
    path: 'movie/:movieId',
    component: MovieComponent
  },
 
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'category-add',
    component: CategoryAddComponent
  },
  {
    path: 'category-edit/:categoryId',
    component: CategoryEditComponent
  },
  {
    path: '',
    component: HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
