import { Component, computed, input, signal } from '@angular/core';
import { Ingredient, RecipeModel } from '../models';

@Component({
  selector: 'app-recipe-detail',
  imports: [],
  template: `<div>
      <p class="recipe-title">{{recipe().name}}</p>
      <p>{{recipe().description}}</p>
    </div>
    <hr/>
    <div class="detail">
      <div class="recipe-left">
          <div class="serving">
            <p>Servings: {{servings()}}</p>
              <button (click)="ChangeServings(-1)" >-</button>
              <button (click)="ChangeServings(1)" >+</button>
          </div>
          <div>
            <p>Ingredients:</p>
            <!--Module 6-->
            <ol>
               @for (item of adjustedIngredients(); track item.name) {
                <li>{{item.name}} - {{item.quantity}} {{item.unit}}</li>
              } @empty {
                <li>No ingredients found</li>
              }
            </ol>
         
          </div>

      </div>
        <div class="image-container">
          <img [src]="recipe().imgUrl" class="recipe-img">

        </div>
    
       
      </div>

    `,
  styles: `
  .recipe-title{
      font-weight: bold;
      font-size: 1.5rem;
  }
  .serving{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  .detail{
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }
  
  .recipe-img{
    border-radius: 15px;
  }
  .image-container{
    align-items: center;
  }
  
  `,
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
