import { Component } from '@angular/core';

@Component({
  selector: 'app-child-component2',
  templateUrl: './child-component2.component.html',
  styleUrl: './child-component2.component.css',
  inputs: ["sendParentDataToComp2"]
})
export class ChildComponent2Component {
  sendParentDataToComp2: any;

}
