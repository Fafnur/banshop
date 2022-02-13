import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  transform(phone: string): string {
    return phone.length === 12
      ? `${phone.slice(0, 2)} (${phone.slice(2, 5)}) ${phone.slice(5, 8)} ${phone.slice(8, 12)}`
      : `${phone.slice(0, 1)} ${phone.slice(1, 4)} ${phone.slice(4, 7)} ${phone.slice(7, 11)}`;
  }
}
