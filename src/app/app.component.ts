import { Component } from '@angular/core';
import { RecipeService } from './recipes';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes';
import {ShoppingListComponent} from "./shopping-list";

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
 // directives: [HeaderComponent,RecipesComponent,ShoppingListComponent]
})
export class AppComponent {

}
