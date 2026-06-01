import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ingredient, RecipeModel } from "./models";
import { MOCK_RECIPES } from "./mock-recipes";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>{{ title() }}</h1>
    <button (click)="switchRecipeShown('back')" >Back</button>
    <button (click)="switchRecipeShown('forward')" >Forward</button>
    <div>
      <p>Name: {{recipe().name}}</p>
      <p>Description: {{recipe().description}}</p>
    </div>
    <hr/>
    <div>
      <p>Servings: {{servings()}}</p>
    <button (click)="ChangeServings(-1)" >-</button>
    <button (click)="ChangeServings(1)" >+</button>
    <p>Image:</p>
    <img [src]="recipe().imgUrl">
    </div>

    <!--Module 6-->
    @for (item of adjustedIngredients(); track $index) {
      <p>{{item.name}} - {{item.quantity}} - {{item.unit}}</p>
    }

    <router-outlet />

  `,
  styles: [],
})
export class App {
  protected readonly title = signal('My Recipe Box');

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
  //Module 5:
  servings = signal(1);
  protected ChangeServings(numb: number) {
    this.servings.update(prev => {
      return Math.max(prev + numb, 1);
    });
  }

  //Module 6:
  adjustedIngredients = computed<Ingredient[]>(() =>
    this.recipe().ingredients.map(y => { return {
      ...y,
      quantity : y.quantity* this.servings()
    } }))
}
