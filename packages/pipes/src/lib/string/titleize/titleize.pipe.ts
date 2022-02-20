import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleize'
})
export class TitleizePipe implements PipeTransform {
  acronyms: string[] = ['SSL', 'HTTP'];

  transform(value: string): string {
    if (value === null || value === undefined)
      return null;
      
    const pascalCase = value.charAt(0).toUpperCase() + value.substr(1);
    return this.convertAcronyms(pascalCase
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
      .replace(/([a-z])([0-9])/gi, '$1 $2')
      .replace(/([0-9])([a-z])/gi, '$1 $2'));
  }

  convertAcronyms(words: string): string {
    return words.split(' ').map(w => this.acronyms.indexOf(w.toUpperCase()) === -1 ? w : w.toUpperCase()).join(' ');
  }
}

