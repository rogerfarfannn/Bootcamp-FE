import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('test-and-practice');
  isReduced  = signal<boolean>(false);

  changeReducedStatus = () =>{
    this.isReduced.update(x=> !x);
  }
}
