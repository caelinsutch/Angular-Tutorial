import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) {
      return null;
    }

    const words = value.split(' ');


    for (let index = 0; index < words.length; index++) {

      const word = words[index];

      if (index > 0 && this.isPresposition(word)) {
        word.toLowerCase();
      } else {
          words[index] = this.toTitleCase(word);
      }
    }

    return words.join(' ');
  }

  private isPresposition(words: string) {

    const prepositions = [
      'of',
      'the',
      'to'

    ];

    return prepositions.includes(words.toLowerCase());

  }

  private toTitleCase(words: string) {

    return words.substr(0, 1).toUpperCase() + words.substr(1).toLowerCase();

  }

}
