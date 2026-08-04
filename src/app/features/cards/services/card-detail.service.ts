import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { CardsResponse } from '../../../core/models/CardsResponse';
import { environment } from '../../../environment';
import { Card } from '../../../core/models/Card';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardDetailService {
  readonly httpClient = inject(HttpClient);
  readonly id = signal<string | null>(null);

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

  getCard(id: string) : Observable<Card> {
    return this.httpClient.get<CardsResponse>(
      environment.apiUrl,
      {
        params: {
          id
        }
      }
    ).pipe(
      map(res => res.data[0])
    );
  }
}
