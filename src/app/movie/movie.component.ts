import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RestService } from '../rest.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie = new Movie();
  constructor(private restService: RestService, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    this.restService.getMovie(this.route.snapshot.params['movieId']).subscribe(
      (data) => {
        
        this.movie = data;
        console.log(data)
      }
    );
    
  }
  deleteMovie(movieId: number){
    this.restService.deleteMovie(movieId).subscribe(
      (result) => {
        this.router.navigate(['/movies']);
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
