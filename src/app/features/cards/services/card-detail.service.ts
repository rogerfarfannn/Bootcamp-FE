import { httpResource } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { CardsResponse } from '../../../core/models/CardsResponse';
import { environment } from '../../../environment';

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
      url: environment.apiUrl,
      params: { id }
    };
  });
}
