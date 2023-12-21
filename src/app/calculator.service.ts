import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  add(value1: number, value2: number) {
    return value1 + value2;
  }

  substract(value1: number, value2: number) {
    return value1 - value2;
  }
}
