import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterUp',
  standalone: true,
})
export class FirstLetterUpPipe implements PipeTransform {
  transform(text: string): string {
    // return arr.map((text) =>
     return text ? text[0].toUpperCase() + text.slice(1) : text
    // );
  }
}
