import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-practical',
  templateUrl: './directives-practical.component.html',
  styleUrl: './directives-practical.component.css'
})
export class DirectivesPracticalComponent {

  num: number = 10;

  list = ["Apple", "Mango", "Orange", "Papaya", "Banana"];
  caseValue: number = 3;

  myStyle = {
    'background-color': 'blue'
  }

}
