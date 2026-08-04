import { Service, signal } from '@angular/core';
import { Card } from '../../../core/models/Card';

@Service()
export class CardSelectionService {
    focusedCard = signal<Card | null>(null);

    selectCard(card: Card) {
        this.focusedCard.update(previousCard => previousCard?.id === card.id ? null : card);
    }

    isSelected(cardId : number){
        return this.focusedCard()?.id === cardId
    }
}
