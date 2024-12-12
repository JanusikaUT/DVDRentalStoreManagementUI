import { Pipe, PipeTransform } from '@angular/core';
import { Rental } from '../models/Rental';

@Pipe({
  name: 'pendingFil'
})
export class PendingFilPipe implements PipeTransform {

  transform(value: Rental[], status: string): Rental[] {
    if (!value || !status) {
      return value;
    }
    return value.filter(item => item.status.toLowerCase() === status.toLowerCase());
  }

}
