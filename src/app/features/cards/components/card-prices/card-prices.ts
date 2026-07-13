import { Component, input } from '@angular/core';
import { CardPrice } from '../../../../core/models/Card';

@Component({
  selector: 'app-card-prices',
  imports: [],
  templateUrl: './card-prices.html',
  styleUrl: './card-prices.css',
})
export class CardPrices {
  cardPrice = input<CardPrice>();
}
