import { httpResource } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { CardsResponse } from '../../../core/models/CardsResponse';
import { PAGINATION } from '../../../core/constants/pagination.constants';
import { environment } from '../../../environment';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class CardsService {
  page = signal(1);
  search = signal('');

  debouncedSearch = toSignal(
    toObservable(this.search).pipe(
      debounceTime(800),
      distinctUntilChanged()
    ),
    { initialValue: '' }
  );

   //debouncedQuery = debounced(this.query, 300);


  readonly cards = httpResource<CardsResponse>(() => ({
    url: environment.apiUrl,
    params: {
      num: PAGINATION.DEFAULT_PAGE_SIZE,
      offset: (this.page() - 1) * PAGINATION.DEFAULT_PAGE_SIZE,
      fname: this.debouncedSearch()
    }
  }));

}
