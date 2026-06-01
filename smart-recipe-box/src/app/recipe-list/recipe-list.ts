import { Component, computed, signal } from '@angular/core';
import { Ingredient, RecipeModel } from "../models";
import { MOCK_RECIPES } from "../mock-recipes";
import { RecipeDetail } from '../recipe-detail/recipe-detail';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeDetail],
  template: `
    <button (click)="switchRecipeShown('back')" >Back</button>
    <button (click)="switchRecipeShown('forward')" >Forward</button>
    <app-recipe-detail [recipe]="recipe()">
    `,
  styles: ``,
})
export class RecipeList {
  
  /*protected clickLogButton = (text: string) =>{
    console.log(text);
  }*/
  protected clickLogButton(text: string) {
    console.log(text);
  } //It is prefered this notation

  //Module 4
  index: number = 0;
  recipe = signal<RecipeModel>(MOCK_RECIPES[this.index]);

  protected switchRecipeShown(text: "forward" | "back") {
    if (text === "forward") {
      this.index = this.index + 1 >= MOCK_RECIPES.length ? 0 : this.index + 1;
    }
    else {
      this.index = this.index - 1 <= -1 ? MOCK_RECIPES.length - 1 : this.index - 1;
    }
    //console.log(this.index);
    this.recipe.set(MOCK_RECIPES[this.index]);
  }
  
}
