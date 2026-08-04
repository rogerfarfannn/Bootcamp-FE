import { Component, computed, inject } from '@angular/core';
import { CardList } from "../../components/card-list/card-list";
import { Searchbox } from "../../../../shared/components/searchbox/searchbox";
import { Paginator } from "../../../../shared/components/paginator/paginator";
import { CardsService } from '../../services/cards.service';
import { LoadingSpinner } from "../../../../shared/components/loading-spinner/loading-spinner";
import { HttpErrorResponse } from '@angular/common/http';
import { ApiError } from '../../../../core/models/ApiError';

@Component({
  selector: 'app-cards-page',
  imports: [CardList, Searchbox, Paginator, LoadingSpinner],
  templateUrl: './cards-page.html',
  styleUrl: './cards-page.css',
})
export class CardsPage {
  readonly cardsService = inject(CardsService);

  cards = this.cardsService.cards.value;
  isLoading = this.cardsService.cards.isLoading;
  error = this.cardsService.cards.error;

  letsSearch(value: string) {
    this.cardsService.search.set(value);
    this.cardsService.page.set(1)
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
