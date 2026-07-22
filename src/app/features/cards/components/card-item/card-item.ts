import { Component, computed, inject, input } from '@angular/core';
import { Card } from '../../../../core/models/Card';
import { RouterLink } from "@angular/router";
import { CardsFavoriteService } from '../../services/cards-favorite.service';

@Component({
  selector: 'app-card-item',
  imports: [RouterLink],
  templateUrl: './card-item.html',
  styleUrl: './card-item.css',
})
export class CardItem {
  cardFavoriteService = inject(CardsFavoriteService);
  card = input.required<Card>();

  isFavorite = computed(() => {
    return this.cardFavoriteService.isACardFavorite(this.card().id);
  });
}
