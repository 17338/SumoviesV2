import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RestService } from '../rest.service';
import { Category } from '../category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories!: Category[];
  category: Category = new Category();
  constructor(private restService: RestService, private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
    

  }
  getCategories(){
    this.restService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  deleteCategory(categoryId: number){
    this.restService.deleteCategory(categoryId).subscribe(
      (result) => {
        window.location.reload();
      },
      (err) => {
        console.log(err);
      }
    )
  }

  findMoviesByCategory(categoryId: number){
    
  }
 
}
