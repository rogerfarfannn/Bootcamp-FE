import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cheapestPrice',
  standalone: true,
  pure: true
})

export class CheapestPricePipe implements PipeTransform {
  transform(
    value: object | Array<unknown> | null | undefined,
    currencySymbol: string = '$'
  ): string {
    if (!value) return 'N/D';

    const rawValues = Array.isArray(value) ? value : Object.values(value);

    const numericPrices = rawValues
      .map(p => (typeof p === 'string' ? parseFloat(p) : Number(p)))
      .filter((p): p is number => !isNaN(p) && p > 0);

    if (numericPrices.length === 0) return 'Sin cotización';

    const minPrice = Math.min(...numericPrices);
    return `${currencySymbol}${minPrice.toFixed(2)}`;
  }
}