import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';
import { Category } from './category';

const baseMovieUrl = "http://localhost:8000/api/movie/";
const baseCategUrl = "http://localhost:8000/api/category/";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient: HttpClient) { }
   getMovies(): Observable<any> {
    return this.httpClient.get<Movie>(baseMovieUrl);
  }

   addMovie(movie: Movie): Observable<any>{
    return this.httpClient.post(baseMovieUrl, movie)

  }

  editMovie(movie: Movie): Observable<any>{
    return this.httpClient.put<Movie>(baseMovieUrl + movie.movieId, movie)

  }

  getMovie(id : number): Observable<any> {
    return this.httpClient.get<Movie>(baseMovieUrl + id)
  }

  deleteMovie(id : number): Observable<any> {
    return this.httpClient.delete<Movie>(baseMovieUrl + id)
  }




  getCategories(): Observable<any> {
    return this.httpClient.get<Category>(baseCategUrl);
  }

  addCategory(category: Category): Observable<any>{
    return this.httpClient.post(baseCategUrl, category)

  }

  editCategory(category: Category): Observable<any>{
    return this.httpClient.put<Category>(baseCategUrl + category.categoryId, category)

  }

  deleteCategory(id : number): Observable<any> {
    return this.httpClient.delete<Category>(baseCategUrl + id)
  }

  getCategory(id : number): Observable<any> {
    return this.httpClient.get<Category>(baseCategUrl + id)
  }

}
