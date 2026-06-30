import { Component, computed, signal } from '@angular/core';
import { Ingredient, RecipeModel } from "../models";
import { MOCK_RECIPES } from "../mock-recipes";
import { RecipeDetail } from '../recipe-detail/recipe-detail';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeDetail, FormsModule],
  template: `
  <div class="main-container">
    <div class="btn-container">
      
    <!--
    <button (click)="switchRecipeShown('back')" >Back</button>
       <button (click)="switchRecipeShown('forward')" >Forward</button>
-->
    </div>
    <input
      name="search"
      type="text"
      [ngModel] = "filterText()"
      (ngModelChange)="filterText.set($event)"
    />
    @for (item of my_recipes(); track item.id) {
    <app-recipe-detail [recipe]="item"/>

    }
  </div>
    `,
  styles: `
  .main-container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .btn-container{
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  `,
})
export class RecipeList {
  filterText = signal("");
  my_recipes = computed<RecipeModel[]>(() => {
    return MOCK_RECIPES.filter(x => x.name.toLowerCase().includes(this.filterText().toLowerCase().trim()));
  })

  /*protected clickLogButton = (text: string) =>{
    console.log(text);
  }*/
  protected clickLogButton(text: string) {
    console.log(text);
    console.log(this.filterText());
  } //It is prefered this notation

  //Module 4
  index: number = 0;
  recipe = signal<RecipeModel>(this.my_recipes()[this.index]);

  protected switchRecipeShown(text: "forward" | "back") {
    if (text === "forward") {
      this.index = this.index + 1 >= this.my_recipes().length ? 0 : this.index + 1;
    }
    else {
      this.index = this.index - 1 <= -1 ? this.my_recipes().length - 1 : this.index - 1;
    }
    //console.log(this.index);
    this.recipe.set(this.my_recipes()[this.index]);
  }

}
