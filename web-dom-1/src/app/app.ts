import { Component, signal } from '@angular/core';
import { DomDemo } from './dom-demo/dom-demo';
@Component({
  selector: 'app-root',
  imports: [DomDemo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('web-dom-1');
}
