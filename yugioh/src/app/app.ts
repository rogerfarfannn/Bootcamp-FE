import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeskGrid } from "./desk-grid/desk-grid";
import { CardDesk } from "./card-desk/card-desk";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DeskGrid, CardDesk],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('yugioh');
}
