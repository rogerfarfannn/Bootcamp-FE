import { Component, computed, input, signal } from '@angular/core';
import { Ingredient, RecipeModel } from '../models';

@Component({
  selector: 'app-recipe-detail',
  imports: [],
  template: `<div>
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
    }`,
  styles: ``,
})
export class RecipeDetail {

  //recipe = input<RecipeModel>(); this is optional, if we want it to be mandatory:
  recipe = input.required<RecipeModel>();
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
