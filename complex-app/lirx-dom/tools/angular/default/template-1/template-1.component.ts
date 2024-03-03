import { Component } from '@angular/core';

[{imports}]

@Component({
  selector: '[{name}]',
  standalone: true,
  templateUrl: './[{name}].component.html',
  styleUrl: './[{name}].component.scss',
  imports: [
    [{components}]
  ]
})
export class [{namePascalCase}]Component {
}

