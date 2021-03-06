import { Ingredient } from '../Shared';

export class ShoppingListService {

  private items: Ingredient[] = [];

  constructor() { }

  getItems() {
    return this.items;
  }

  addItems(item : Ingredient[]) {
    Array.prototype.push.apply(this.items, item);
  }
  addItem(item: Ingredient) {
    this.items.push(item);
  }

  editItem(oldItem: Ingredient, newItem:Ingredient) {
    this.items[this.items.indexOf(oldItem)] = newItem;
  }

  deleteItem(item: Ingredient) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
