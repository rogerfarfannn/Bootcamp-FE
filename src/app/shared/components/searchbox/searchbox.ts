import { Component, output } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  imports: [],
  templateUrl: './searchbox.html',
  styleUrl: './searchbox.css',
})
export class Searchbox {
   search = output<string>();

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.search.emit(value);
  }
}
