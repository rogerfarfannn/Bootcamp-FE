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

  @for (set of cardSets(); track set.set_code) {
    ...
  }
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

### CHALLENGE 2 

## HU-001:
"Como duelista, quiero que cada carta y el catálogo tengan una URL propia a la que pueda volver o compartir, para 
no perder mi lugar al refrescar la página o enviarle un enlace a alguien. "

Para resolver esta HU, se configuraron las rutas en el archivo app.routes.ts, teniendo una para la vista de una 
carta individual (recibiendo su ID), de esa forma, se permite que cada una de las cartas disponibles, tengan 
su propia página


export const routes: Routes = [
  {
    path: 'cards',
    loadComponent: () =>
      import('./features/cards/pages/cards-page/cards-page')
        .then(m => m.CardsPage)
  },
  {
    path: 'cards/favorites',
    loadComponent: () =>
      import('./features/cards/pages/cards-favorite-page/cards-favorite-page')
        .then(m => m.CardsFavoritePage),
    canActivate: [favoritesGuard]
  },
  {
    path: 'cards/:id',
    loadComponent: () =>
      import('./features/cards/pages/card-detail/card-detail')
        .then(m => m.CardDetail),
    resolve: { 
      card: cardDetailResolverFn 
    },
    children: [....]
  },
  {
    path: '',
    redirectTo: 'cards',
    pathMatch: 'full'
  },

];

## HU-002: Explorar secciones del detalle como sub-vistas
"Como duelista, quiero moverme entre las distintas secciones de información de una carta (efecto, estadísticas, precio 
de referencia) sin salir del detalle, para profundizar en la información que me interesa sin perder el contexto de la 
carta seleccionada." 

Para realizar este HU, se colocaron dos rutas adicionales como hijas de la ruta de vista de detalle.

 {
    path: 'cards/:id',
    loadComponent: () =>
      import('./features/cards/pages/card-detail/card-detail')
        .then(m => m.CardDetail),
    resolve: { 
      card: cardDetailResolverFn 
    },
    children: [{
      path: '',
      redirectTo: 'sets',
      pathMatch: 'full'
    },
    {
      path: 'sets',
      loadComponent: () =>
        import('./features/cards/components/card-sets/card-sets')
          .then(m => m.CardSets),
    }, {
      path: 'prices',
      loadComponent: () =>
        import('./features/cards/components/card-prices/card-prices')
          .then(m => m.CardPrices),
    }
    ]
  },
  
  Como se puede observar, se colocó una ruta con "" para redireccionar automáticamente a una de las subrutas
  Dentro de la página de card-detail, se tiene: 

    <app-tab-carddetail-nav></app-tab-carddetail-nav>
      <router-outlet />

  De esa forma, se puede navegar entre los sumbomponentes y subrutas del detalle de la carta

##  HU-03 — Acceder a mi colección personal 
"Como duelista, quiero tener una sección de 'Mi colección' distinta del catálogo general, para ver únicamente lo que a 
mí me interesa dentro de la app."

Para esta sección, se creó una nueva página llamada "CardsFavoritePage"
y un servicio llamado: "CardsFavoriteService".

Se utilizó localStorage para guardar las cartas localmente:

export class CardsFavoriteService {
  readonly #localStorageKey = "favorite-cards";
  favoriteCards = signal<Card[]>(this.getFavoriteCards());

  getFavoriteCards  () : Card[] {
    const cardsString : string | null =  localStorage.getItem(this.#localStorageKey); 
    ...

Se colocó un *guard* separado en una carpeta de guards el cual verificaba 
que existan elementos dentro de la lista de favoritos.
Para mostrar los mensajes de información se utilizó la librería Swal.

export const favoritesGuard: CanActivateFn = () => {
    const cardsFavoriteService = inject(CardsFavoriteService);
    const router = inject(Router);

    if (cardsFavoriteService.favoriteCards().length > 0) {
        return true;
    } else {
        Swal.fire(....)
        return router.navigate(['/']);

    }
}
Y dentro de la ruta se colcó el guard:
 {
    path: 'cards/favorites',
   ....,
    canActivate: [favoritesGuard]
  },
  
##  HU-04 — Abrir el detalle de una carta 
"Como duelista, quiero que al abrir el detalle de una carta la información ya esté lista para mostrarse, para no ver una 
pantalla vacía o a medio cargar por una fracción de segundo cada vez que navego."


Para resolver esta HU, se utilizó un resolve dentro de la ruta:
{
    path: 'cards/:id',
   ....,
    resolve: { 
      card: cardDetailResolverFn 
    },
El resolve, fue creado en su carpeta de "resolvers",
donde se devuelve la card (en forma de observable) y s eutiliza pipe para que en caso de error, retornar a la página principal:
xport const cardDetailResolverFn: ResolveFn<unknown> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const router = inject(Router);
    const cardDetailService = inject(CardDetailService);
    const id = route.paramMap.get('id') ?? "";
    cardDetailService.id.set(id);
    
    return cardDetailService.getCard(id).pipe(
        catchError(err => {
            Swal.fire({...
            router.navigate(["/"])
dentro de app.config.ts, se añadió   provideRouter(routes, withComponentInputBinding()) para permitir enviar el card como
input


## HU-05 — Identificar cartas destacadas de un vistazo 
Como duelista, quiero que ciertas cartas se destaquen visualmente según alguna característica relevante (por 
ejemplo, alto ATK, cierto atributo, o estar marcada como favorita), para identificarlas rápidamente sin tener que leer 
el detalle de cada una.

Para resolver esto se usó una directiva, la cual recibía una carta como input, y según su ataque
colocaba o no una clase especial a la carta


export class GreatCardsDirective implements OnInit {
 
  readonly #element = inject(ElementRef);
  readonly #renderer = inject(Renderer2);

  readonly card = input.required<Card>();

   ngOnInit(): void {
    const atk = this.card().atk;
    if(atk !== undefined && atk > 1000){
        this.#renderer.addClass(
          this.#element.nativeElement,
          'highlight-card'
        );
    }
  }
}

Y finalmente, al llamar al componente se lo coloca:
 <app-card-item [card]="item" appGreatCardsDirective></app-card-item>