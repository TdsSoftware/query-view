import { HttpErrorResponse } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayError',
})
export class DisplayErrorPipe implements PipeTransform {
  transform(error: any): string {
    if (error instanceof HttpErrorResponse) {
      return error.statusText;
    }

    if (typeof error === 'string') {
      return error;
    }

    return 'Ocorreu um erro ao carregar os dados';
  }
}
