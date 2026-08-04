import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-card-header',
  imports: [],
  templateUrl: './card-header.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './card-header.css',
})
export class CardHeader {
  name = input.required<string>();
  description = input.required<string>();
  type = input.required<string>();
}
