import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyerrorhandlerService implements ErrorHandler {

  constructor() { }

  handleError(error) {
    if(error instanceof HttpErrorResponse) {
      alert('Bckend error');
    } else {
      alert('Frontend error');
    }

    console.error(error);
  }
}
