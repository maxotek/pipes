import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {
  transform(value: number, defaultVal?: string): string {
    if (value === null || value === undefined) {
      return defaultVal ? defaultVal : '';
    }

    if (value < 1000) {
      return value.toString();
    } else if (value < 1000 * 1000) {
      return `${(value / 1000).toFixed(0)}K`;
    } else if (value < 1000 * 1000 * 1000) {
      return `${(value / 1000 / 1000).toFixed(0)}M`;
    } else {
      return `${(value / 1000 / 1000 / 1000).toFixed(0)}B`;
    }
  }

  locale(value: number, defaultVal?: string): string {
    if (value === null || value === undefined) {
      return defaultVal ? defaultVal : '';
    }

    return value.toLocaleString();
  }
}