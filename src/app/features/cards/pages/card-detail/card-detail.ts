import { Component, computed, inject, input, signal, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { CardDetailService } from '../../services/card-detail.service';
import { CardDetailImage } from '../../components/card-detail-image/card-detail-image';
import { CardHeader } from '../../components/card-header/card-header';
import { CardStats } from '../../components/card-stats/card-stats';
import { CardCombat } from '../../components/card-combat/card-combat';
import { Location } from '@angular/common';
import { TabCarddetailNav } from '../../components/tab-carddetail-nav/tab-carddetail-nav';
import { Card } from '../../../../core/models/Card';

@Component({
  selector: 'app-card-detail',
  imports: [CardDetailImage, CardHeader, CardStats, CardCombat, RouterOutlet, TabCarddetailNav],
  templateUrl: './card-detail.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './card-detail.css',
})
export class CardDetail {
  readonly route = inject(ActivatedRoute);
  //readonly cardService = inject(CardDetailService);
  private location = inject(Location);

  readonly card = input.required<Card>();
  /*card = computed(() =>
    this.cardService.card.value()?.data[0]
  );*/

  /*ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.cardService.id.set(id);
  }*/

  goBack() {
    this.location.back();
  }
}
