import { httpResource } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { CardsResponse } from '../../../core/models/CardsResponse';

@Injectable({
  providedIn: 'root',
})
export class CardDetailService {
  readonly id = signal<number | null>(null);

  readonly card = httpResource<CardsResponse>(() => {
    const id = this.id();

    if (!id) {
      return undefined;
    }

    return {
      url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
      params: { id }
    };
  });
}
