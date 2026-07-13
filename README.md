# Implementation Notes

All 5 user stories were implemented using **Angular Signals**, **component separation**, **data binding**, and the new **control flow syntax**.

## HU-01 — Browse Card Catalog

* Created a dedicated **Cards Page** composed of reusable subcomponents:

  * `searchbox`
  * `paginator`
  * `card-list`

    * `card-item`
* I decided to implement **pagination** because the API's main endpoint returns **14k+ cards** by default.
* Built a reusable `paginator` component to handle page navigation.
* `card-list` uses `flex` and `flex-wrap` so cards automatically adapt to different screen sizes.
* Each card is rendered through its own `card-item` component, which organizes the information using Flexbox.

For fetching cards, I decided to use `httpResource` inside the service. Since it is built on top of **Signals**, it automatically reacts to state changes.

```ts
readonly cards = httpResource<CardsResponse>(() => ({
  url: '...',
  params: {
    num: PAGINATION.DEFAULT_PAGE_SIZE,
    offset: (this.page() - 1) * PAGINATION.DEFAULT_PAGE_SIZE,
    fname: this.search()
  }
}));
```

* Created a reusable `load-spinner` component to display while requests are loading.
* If no cards are found, an appropriate empty-state message is displayed.

Inside the Cards Page, the request state is exposed directly from `httpResource`:

```ts
cards = this.cardsService.cards.value;
isLoading = this.cardsService.cards.isLoading;
error = this.cardsService.cards.error;
```

Based on those states, the template renders either:

* the cards list,
* the loading spinner,
* or the error message.

---

## HU-02 — Search Cards by Name

* Implemented a shared `searchbox` component that exposes an `output`, allowing any page to decide what to do with the search value.

```ts
export class Searchbox {
  search = output<string>();

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.search.emit(value);
  }
}
```

* The template uses **event binding** to trigger the search.

The parent component updates the Signals like this:

```ts
letsSearch(value: string) {
  this.cardsService.search.set(value);
  this.cardsService.page.set(1);
}
```

Since `httpResource` is reactive, updating either `page()` or `search()` automatically triggers a new request, so searching happens without any additional logic.

---

## HU-03 — View Card Details

* Created a dedicated **Card Details Page** instead of using a modal. This approach feels more natural for this kind of application, and it also avoids UI limitations since each card contains a large amount of information.

* The page does **not** receive the card as an input. Instead, it extracts the card ID from the route and performs a new request. This means users can access the page directly through its URL without depending on the previous screen.

```ts
ngOnInit() {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.cardService.id.set(id);
}
```

* As with the catalog, updating the Signal automatically triggers the request through `httpResource`.

---

## HU-04 — Organize Card Details into Sections

* Split the Details Page into multiple reusable components.
* For list-based information, I used the native HTML `<details>` element to create an accordion-like experience.

```html
<details class="accordion-sets">
  <summary>
    Sets
  </summary>

  <something>...
</details>
```

This keeps the page organized while making large amounts of information easier to navigate.

---

## HU-05 — Keep Search State Consistent

* Search and pagination state remain consistent because both are managed centrally inside the service using **Signals**.
* Request states such as `isLoading` and `error` are also handled reactively through `httpResource`.

```ts
export class CardsService {
  page = signal(1);
  search = signal('');

  readonly cards = httpResource<CardsResponse>(() => ({
    url: '...',
    params: {
      num: PAGINATION.DEFAULT_PAGE_SIZE,
      offset: (this.page() - 1) * PAGINATION.DEFAULT_PAGE_SIZE,
      fname: this.search()
    }
  }));
}
```

This keeps the application state centralized, reactive, and synchronized across the different components.
