import { httpResource } from '@angular/common/http';
import { debounced, Injectable, Service, signal } from '@angular/core';
import { CardsResponse } from '../../../core/models/CardsResponse';
import { PAGINATION } from '../../../core/constants/pagination.constants';
import { environment } from '../../../environment';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Service()

export class CardsService {
  page = signal(1);
  search = signal('');

  type = signal('');
  attribute = signal('');
  /*debouncedSearch = toSignal(
    toObservable(this.search).pipe(
      debounceTime(800),
      distinctUntilChanged()
    ),
    { initialValue: '' }
  );*/

  debouncedSearch = debounced(this.search, 800);


  readonly cards = httpResource<CardsResponse>(() => ({
    url: environment.apiUrl,
    params: {
      num: PAGINATION.DEFAULT_PAGE_SIZE,
      offset: (this.page() - 1) * PAGINATION.DEFAULT_PAGE_SIZE,

      ...(this.debouncedSearch.value() && {
        fname: this.debouncedSearch.value()
      }),

      ...(this.type() && {
        type: this.type()
      }),

      ...(this.attribute() && {
        attribute: this.attribute()
      })
    }
  }));

}
