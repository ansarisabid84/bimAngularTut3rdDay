import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component1',
  templateUrl: './child-component1.component.html',
  styleUrl: './child-component1.component.css',
  inputs: ["inputField1"],
  outputs:  ["onChildValueChanged"]
})
export class ChildComponent1Component {
  inputField1: any;

  onChildValueChanged = new EventEmitter();

  passValueToParent(value: any) {
    this.onChildValueChanged.emit(value);
  }

}
