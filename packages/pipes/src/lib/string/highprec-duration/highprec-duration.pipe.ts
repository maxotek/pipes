import { Pipe, PipeTransform } from '@angular/core';
import { DurationPipe } from 'ngx-moment';

@Pipe({
  name: 'highPrecDuration'
})
export class HighPrecDurationPipe implements PipeTransform {
  constructor(private durationPipe: DurationPipe) {
  }

  transform(value: number, unit: string): string {
    if (value === null || value === undefined) {
      return null;
    }

    if (unit !== 'milliseconds' && unit !== 'seconds') {
      return this.durationPipe.transform(value, unit);
    }

    const msValue = unit === 'seconds' ? value * 1000 : value;

    if (msValue < 1000) {
      return `${msValue}ms`;
    } else if (msValue < 60 * 1000) {
      return `${toFixedIfNecessary(msValue / 1000, 1)}s`;
    } else {
      return this.durationPipe.transform(value, unit);
    }
  }
}
  
function toFixedIfNecessary( value, dp ){
  return +parseFloat(value).toFixed( dp );
}
