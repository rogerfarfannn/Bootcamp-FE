import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>{{ title() }}</h1>
    <button (click)="clickLogButton('Button 1 Clicked')" >Button 1</button>
    <button (click)="clickLogButton('Button 2 Clicked')" >Button 2</button>
    <router-outlet />

  `,
  styles: [],
})
export class App {
  protected readonly title = signal('My Recipe Box');

  /*protected clickLogButton = (text: string) =>{
    console.log(text);
  }*/
  protected clickLogButton (text: string) {
    console.log(text);
  } //It is prefered this notation
}
