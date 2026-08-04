import { Component, computed, inject, input, ChangeDetectionStrategy } from '@angular/core';
import { CardSet } from '../../../../core/models/Card';
import { SectionAccordion } from '../section-accordion/section-accordion';
import { CardDetailService } from '../../services/card-detail.service';
import { LoadingSpinner } from '../../../../shared/components/loading-spinner/loading-spinner';

@Component({
  selector: 'app-card-sets',
  imports: [SectionAccordion, LoadingSpinner],
  templateUrl: './card-sets.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './card-sets.css',
})
export class CardSets {
  cardDetailService = inject(CardDetailService);

  cardSets = computed(() => {
    return this.cardDetailService.card.value()?.data[0]?.card_sets ?? [];
  });
}
