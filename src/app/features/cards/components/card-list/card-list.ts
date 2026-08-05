import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { CardItem } from '../card-item/card-item';
import { Card } from '../../../../core/models/Card';
import { GreatCardsDirective } from '../../directives/great-cards.directive';

@Component({
  selector: 'app-card-list',
  imports: [CardItem, GreatCardsDirective],
  templateUrl: './card-list.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './card-list.css',
})
export class CardList {
  cards = input.required<Card[]>();
  loading = input<boolean>(false);
}
