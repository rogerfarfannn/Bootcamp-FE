import { Component, input } from '@angular/core';
import { CardItem } from "../card-item/card-item";
import { Card } from '../../../../core/models/Card';

@Component({
  selector: 'app-card-list',
  imports: [CardItem],
  templateUrl: './card-list.html',
  styleUrl: './card-list.css',
})
export class CardList {
  cards = input.required<Card[]>();
}
