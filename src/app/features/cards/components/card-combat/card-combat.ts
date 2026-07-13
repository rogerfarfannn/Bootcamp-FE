import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-combat',
  imports: [],
  templateUrl: './card-combat.html',
  styleUrl: './card-combat.css',
})
export class CardCombat {
    atk = input.required<string>();
    def = input.required<string>();
}
