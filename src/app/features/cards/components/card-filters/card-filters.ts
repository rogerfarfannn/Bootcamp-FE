import { Component, output, signal } from '@angular/core';
import { CARD_ATTRIBUTES, CARD_TYPES } from '../../constants/card-filters.constants';

@Component({
  selector: 'app-card-filters',
  imports: [],
  templateUrl: './card-filters.html',
  styleUrl: './card-filters.css',
})
export class CardFilters {
  readonly cardTypes = CARD_TYPES;
  readonly cardAttributes = CARD_ATTRIBUTES;

  readonly cardTypeChange = output<string>();
  readonly attributeChange = output<string>();

  readonly selectedAttribute = signal('');

  onAttributeChange(attribute : string){
    this.selectedAttribute.set(attribute);
    this.attributeChange.emit(attribute);
  }

  onTypeChange(cardType : string){
    this.cardTypeChange.emit(cardType);
  }
}
