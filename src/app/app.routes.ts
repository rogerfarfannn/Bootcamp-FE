import { Routes } from '@angular/router';
import { favoritesGuard } from './features/cards/guards/favvorite.guard';
import { cardDetailResolverFn } from './features/cards/resolvers/card-detail.resolver';



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
  {
    path: '',
    redirectTo: 'cards',
    pathMatch: 'full'
  },

];
