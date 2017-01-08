import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [];

 // recipe = new Recipe('Dummy','Dummy','https://img1.cgtrader.com/items/90545/d018c27ead/large/rigged-dummy-man-3d-model-rigged-max.jpg');
  constructor( private recipeService : RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => this.recipes = recipes
   );
  }

}
