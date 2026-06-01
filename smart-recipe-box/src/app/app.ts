import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeList } from './recipe-list/recipe-list';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RecipeList],
  template: `
  <h1>{{ title() }}</h1>
  <app-recipe-list/>
  <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('My Recipe Box');

}
