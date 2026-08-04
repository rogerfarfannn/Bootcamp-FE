import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-card-detail-image',
  imports: [],
  templateUrl: './card-detail-image.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './card-detail-image.css',
})
export class CardDetailImage {
  url = input.required<string>();
  name = input.required<string>();
}
