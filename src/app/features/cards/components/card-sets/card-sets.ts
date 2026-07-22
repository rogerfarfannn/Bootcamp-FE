import { Component, computed, inject, input } from '@angular/core';
import { CardSet } from '../../../../core/models/Card';
import { SectionAccordion } from "../section-accordion/section-accordion";
import { CardDetailService } from '../../services/card-detail.service';

@Component({
  selector: 'app-card-sets',
  imports: [SectionAccordion],
  templateUrl: './card-sets.html',
  styleUrl: './card-sets.css',
})
export class CardSets {
  cardDetailService = inject(CardDetailService);
  
  cardSets = computed(() => {
    return this.cardDetailService.card.value()?.data[0]?.card_sets ?? [];
  });
}
