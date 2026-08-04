import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-detail-image',
  imports: [],
  templateUrl: './card-detail-image.html',
  styleUrl: './card-detail-image.css',
})
export class CardDetailImage {
  url = input.required<string>();
  name = input.required<string>();
}
