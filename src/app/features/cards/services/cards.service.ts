import { httpResource } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { CardsResponse } from '../../../core/models/CardsResponse';
import { PAGINATION } from '../../../core/constants/pagination.constants';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
   page = signal(1);
   search = signal('');

  readonly cards = httpResource<CardsResponse>(() => ({
    url: environment.apiUrl,
    params: {
      num: PAGINATION.DEFAULT_PAGE_SIZE,
      offset: (this.page() - 1) * PAGINATION.DEFAULT_PAGE_SIZE,
      fname: this.search()
    }
  }));

}
