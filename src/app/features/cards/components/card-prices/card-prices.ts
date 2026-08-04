import { Component, computed, inject, input } from '@angular/core';
import { SectionAccordion } from "../section-accordion/section-accordion";
import { CardDetailService } from '../../services/card-detail.service';
import { CheapestPricePipe } from '../../pipes/cheapest-price.pipe';

@Component({
  selector: 'app-card-prices',
  imports: [SectionAccordion, CheapestPricePipe],
  templateUrl: './card-prices.html',
  styleUrl: './card-prices.css',
})
export class CardPrices {
  cardDetailService = inject(CardDetailService);
  
  cardPrice = computed(() => {
    return this.cardDetailService.card.value()?.data[0]?.card_prices?.[0] 
  });
}
