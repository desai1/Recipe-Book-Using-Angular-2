import { Injectable, EventEmitter } from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import { Recipe } from './recipe';
import {Ingredient} from "../Shared";
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {

  recipesChanged = new EventEmitter<Recipe[]>();
      private recipes : Recipe[] = [
        new Recipe('Schnitzel','very tasty','http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg',[
        new Ingredient('French Fries',2),
          new Ingredient('Pork Meat',1)]),
        new Recipe('Summer Salad','Okayish','http://cdn.iowagirleats.com/wp-content/uploads/2013/05/Triple-Berry-Summer-Salad-03_mini.jpg',[])
      ];

  constructor(private http: Http) {
  }

      getRecipes() {
          return this.recipes;
      }

  getRecipe(id: number){
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe),1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    console.log(body);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recipebook-cdcbb.firebaseio.com//recipes.json', body, {headers: headers});
  }


  fetchData() {
    return this.http.get('https://recipebook-cdcbb.firebaseio.com//recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
        this.recipesChanged.emit(this.recipes);
        }
      );
  }


}
