import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model"

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Test recipe description','https://live.staticflickr.com/3186/2284439692_d9b92346cf_b.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
