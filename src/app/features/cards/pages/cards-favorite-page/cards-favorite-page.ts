import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CardsFavoriteService } from '../../services/cards-favorite.service';
import { CardList } from '../../components/card-list/card-list';

@Component({
  selector: 'app-cards-favorite-page',
  imports: [CardList],
  templateUrl: './cards-favorite-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './cards-favorite-page.css',
})
export class CardsFavoritePage {
  cardsFavoriteService = inject(CardsFavoriteService);
  cards = this.cardsFavoriteService.favoriteCards;
}
