import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  movie = new Movie;

  constructor(private restService: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.restService.getMovie(this.route.snapshot.params['movieId']).subscribe(
      (data) => {
        console.log(data);
        this.movie = data;
      }
    );
    
  }

  editMovie(){
    this.restService.editMovie(this.movie).subscribe(
      (result) => {
        this.router.navigate(['/movies']);
      },
      (err) => {
        console.log(err);
      }
    )
  }

}