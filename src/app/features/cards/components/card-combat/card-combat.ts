import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-card-combat',
  imports: [],
  templateUrl: './card-combat.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './card-combat.css',
})
export class CardCombat {
  atk = input.required<string>();
  def = input.required<string>();
}
