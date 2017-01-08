import { Component } from '@angular/core';
import {RecipeListComponent} from "./recipe-list";
import {RecipeDetailComponent} from "./recipe-detail";
import {Recipe} from "./recipe";

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
 // directives: [RecipeListComponent,RecipeDetailComponent]
})
export class RecipesComponent {
    selectedRecipe : Recipe ;
}
