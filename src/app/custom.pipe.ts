import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myltiplySameNumber'
})
export class CustomPipe implements PipeTransform {

  transform(value: number): number {
    return value * value;
  }

}

@Pipe({
  name: 'myltiplySameNumberDisplay'
})
export class MyltiplySameNumberDisplay implements PipeTransform {

  transform(value: number): string {
    return `${value} * ${value}`;
  }

}
