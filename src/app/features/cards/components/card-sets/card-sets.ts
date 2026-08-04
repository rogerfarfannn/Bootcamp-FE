import { Component, input } from '@angular/core';
import { CardSet } from '../../../../core/models/Card';

@Component({
  selector: 'app-card-sets',
  imports: [],
  templateUrl: './card-sets.html',
  styleUrl: './card-sets.css',
})
export class CardSets {
  cardSets = input.required<CardSet[]>();
}
