import { Injectable, signal } from '@angular/core';
import { Card } from '../../../core/models/Card';

@Injectable({
  providedIn: 'root',
})
export class CardsFavoriteService {
  readonly #localStorageKey = "favorite-cards";
  favoriteCards = signal<Card[]>(this.getFavoriteCards());

  getFavoriteCards  () : Card[] {
    const cardsString : string | null =  localStorage.getItem(this.#localStorageKey); 
    console.log(cardsString);
    if(cardsString){
      return JSON.parse(cardsString);
    }
    return [];
  }

  changeFavoriteStatus (card : Card){
    this.favoriteCards.update( favCards => {
      const filteredCards = favCards.filter(x=> x.id != card.id);
      const wasRemoved = filteredCards.length !== favCards.length
      if(!wasRemoved) {
        return [...filteredCards, card]
      }
      else{
        return [...filteredCards];
      }
    })
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.favoriteCards()));
  }

  isACardFavorite (cardId : number){
    return this.favoriteCards().some(x => x.id == cardId);
  }
}
