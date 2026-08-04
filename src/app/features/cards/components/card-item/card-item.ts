import { Component, computed, inject, input, ChangeDetectionStrategy } from '@angular/core';
import { Card } from '../../../../core/models/Card';
import { RouterLink } from '@angular/router';
import { CardsFavoriteService } from '../../services/cards-favorite.service';
import { CardSelectionService } from '../../services/card-selection.service';

@Component({
  selector: 'app-card-item',
  imports: [RouterLink],
  templateUrl: './card-item.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './card-item.css',
})
export class CardItem {
  cardFavoriteService = inject(CardsFavoriteService);
  cardSelectionService = inject(CardSelectionService);
  
  card = input.required<Card>();

  isFavorite = computed(() => {
    return this.cardFavoriteService.isACardFavorite(this.card().id);
  });
}
