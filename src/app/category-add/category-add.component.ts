import { Component, OnInit} from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

import { Category } from '../category';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  category = new Category;
  constructor(private rest: RestService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  addCategory(){
    this.rest.addCategory(this.category).subscribe(
      (result) => {this.router.navigate(['/categories'])}
    )
  }
}
