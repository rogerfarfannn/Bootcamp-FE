import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-stats',
  imports: [],
  templateUrl: './card-stats.html',
  styleUrl: './card-stats.css',
})
export class CardStats {
  attribute = input.required<string>();
  level = input.required<number>();
  race = input.required<string>();
  type = input.required<string>();

}
