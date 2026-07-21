import { Routes } from '@angular/router';

export const routes: Routes = [
     {
    path: 'cards',
    loadComponent: () =>
      import('./features/cards/pages/cards-page/cards-page')
        .then(m => m.CardsPage)
  },
  {
    path: 'cards/:id',
    loadComponent: () =>
      import('./features/cards/pages/card-detail/card-detail')
        .then(m => m.CardDetail)
  },
  {
    path: '',
    redirectTo: 'cards',
    pathMatch: 'full'
  }
];
