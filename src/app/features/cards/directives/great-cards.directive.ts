import { Directive, ElementRef, inject, input, OnInit, Renderer2 } from '@angular/core';
import { Card } from '../../../core/models/Card';

@Directive({
  selector: '[appGreatCardsDirective]',
})
export class GreatCardsDirective implements OnInit {
 
  readonly #element = inject(ElementRef);
  readonly #renderer = inject(Renderer2);

  readonly card = input.required<Card>();

   ngOnInit(): void {
    const atk = this.card().atk;
    if(atk !== undefined && atk > 1000){
      console.log("HOLAAA")
        this.#renderer.addClass(
          this.#element.nativeElement,
          'highlight-card'
        );
    }
  }
}
