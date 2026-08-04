import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  imports: [],
  templateUrl: './searchbox.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './searchbox.css',
})
export class Searchbox {
  searchValue = input('');
  search = output<string>();

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.search.emit(value);
  }
}
