import { Routes} from '@angular/router';
import { RecipeEditComponent } from './recipe-edit';
import { RecipeStartComponent } from './recipe-start.component';
import { RecipeDetailComponent } from './recipe-detail';

export const RECIPE_ROUTES: Routes = [
  { path: '', component: RecipeStartComponent },
  { path: 'new', component: RecipeEditComponent },
  { path: ':id', component: RecipeDetailComponent },
  { path: ':id/edit', component: RecipeEditComponent }
];
