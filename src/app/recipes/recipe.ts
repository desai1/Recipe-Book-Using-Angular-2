import {Ingredient} from "../Shared";
export class Recipe {
    constructor(public name:string ,public description: string ,public imagePath: string ,public ingredient :Ingredient[]){

    }
}
