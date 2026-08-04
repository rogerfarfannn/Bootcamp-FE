import { Component, computed, inject, ChangeDetectionStrategy } from '@angular/core';
import { CardList } from '../../components/card-list/card-list';
import { Searchbox } from '../../../../shared/components/searchbox/searchbox';
import { Paginator } from '../../../../shared/components/paginator/paginator';
import { CardsService } from '../../services/cards.service';
import { LoadingSpinner } from '../../../../shared/components/loading-spinner/loading-spinner';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiError } from '../../../../core/models/ApiError';
import { CardFilters } from "../../components/card-filters/card-filters";
import { CardSelectionService } from '../../services/card-selection.service';
import { CardItem } from '../../components/card-item/card-item';

@Component({
  selector: 'app-cards-page',
  imports: [CardList, Searchbox, Paginator, LoadingSpinner, CardFilters, CardItem],
  templateUrl: './cards-page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './cards-page.css',
})
export class CardsPage {
  readonly cardsService = inject(CardsService);
  readonly cardSelectionService = inject(CardSelectionService);

  readonly focusedCard = this.cardSelectionService.focusedCard;

  cards = this.cardsService.cards.value;
  isLoading = this.cardsService.cards.isLoading;
  error = this.cardsService.cards.error;

  letsSearch(value: string) {
    this.cardsService.search.set(value);
    this.cardsService.page.set(1);
  }

  letsSearchByCardType(value: string){
    this.cardsService.type.set(value);
    this.cardsService.page.set(1);
  }

  letsSearchByAttribute(value: string){
    this.cardsService.attribute.set(value);
    this.cardsService.page.set(1);
  }
  /*
  errorMessage = computed(() => {
    const err = this.error();

    if (err instanceof HttpErrorResponse) {
      return err.error.error ?? "";
    }

    return 'Unknown error';
  });
  */

  readonly apiError = computed(() => this.error() as ApiError | null);


}
