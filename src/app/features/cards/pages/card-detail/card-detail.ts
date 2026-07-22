import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { CardDetailService } from '../../services/card-detail.service';
import { CardDetailImage } from "../../components/card-detail-image/card-detail-image";
import { CardHeader } from "../../components/card-header/card-header";
import { CardStats } from "../../components/card-stats/card-stats";
import { CardCombat } from '../../components/card-combat/card-combat';
import { CardSets } from "../../components/card-sets/card-sets";
import { CardPrices } from "../../components/card-prices/card-prices";
import { Location } from '@angular/common';
import { TabCarddetailNav } from "../../components/tab-carddetail-nav/tab-carddetail-nav";

@Component({
  selector: 'app-card-detail',
  imports: [CardDetailImage, CardHeader, CardStats, CardCombat, CardSets, CardPrices, RouterOutlet, RouterLinkWithHref, TabCarddetailNav],
  templateUrl: './card-detail.html',
  styleUrl: './card-detail.css',
})
export class CardDetail {
  readonly route = inject(ActivatedRoute);
  readonly cardService = inject(CardDetailService);
  private location = inject(Location);

  card = computed(() =>
    this.cardService.card.value()?.data[0]
  );

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cardService.id.set(id);
  }

  goBack() {
    this.location.back();
  }

}
