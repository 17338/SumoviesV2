import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RestService } from '../rest.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies!: Movie[];
  movie: Movie = new Movie();

  constructor(private restService: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getMovies();
    
  }
  getMovies(){
    this.restService.getMovies().subscribe(data => {
      this.movies = data;
    })
  }
  
  
}
