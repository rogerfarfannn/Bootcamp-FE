import { Routes } from '@angular/router';

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
        .then(m => m.CardsFavoritePage)
  },
  {
    path: 'cards/:id',
    loadComponent: () =>
      import('./features/cards/pages/card-detail/card-detail')
        .then(m => m.CardDetail),
    children: [{
      path: '',
      redirectTo: 'sets', // <-- Redirige automáticamente cuando la ruta sea solo /cards/:id
      pathMatch: 'full'   // <-- Crucial para que coincida exactamente con el path vacío
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
  {
    path: '',
    redirectTo: 'cards',
    pathMatch: 'full'
  },

];
