import { Component, input } from '@angular/core';
import { Card } from '../../../../core/models/Card';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-card-item',
  imports: [RouterLink],
  templateUrl: './card-item.html',
  styleUrl: './card-item.css',
})
export class CardItem {
  card = input.required<Card>();
}
