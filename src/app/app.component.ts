import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  preserveWhitespaces: true
})
export class AppComponent {
  title = 'classProject';
  inputVar1: any;
  result: number = 0;

  constructor(private calculatorService: CalculatorService){}

  changeValue(typedValue: string) {
    this.title = typedValue;
  }

  getData(event: any) {
    this.inputVar1 = event;
  }

  calculateAndDisplay(value1: string, value2: string, whichOperation: string) {
    if (whichOperation == "+") {
      this.result = this.calculatorService.add(parseInt(value1), parseInt(value2));
    } else if (whichOperation == "-") {
      this.result = this.calculatorService.substract(parseInt(value1), parseInt(value2));
    }
  }
}
