import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';

import { Category } from '../category';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  category = new Category;
  constructor(private restService: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.restService.getCategory(this.route.snapshot.params['categoryId']).subscribe(
      (data) => {
        console.log(data);
        this.category = data;
      }
    );
    
  }

  editCategory(){
    this.restService.editCategory(this.category).subscribe(
      (result) => {
        this.router.navigate(['/categories']);
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
