import { Component, OnInit} from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Movie } from '../movie';
import { Category } from '../category';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {
  movie = new Movie;
  categories!: Category[];
  category: Category = new Category();
  constructor(private rest: RestService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
  }
  addMovie(){
    this.rest.addMovie(this.movie).subscribe(
      (result) => {this.router.navigate(['/movies'])}
    )
  }
  getCategories(){
    this.rest.getCategories().subscribe(data => {
      this.categories = data;
    })
  }
}
