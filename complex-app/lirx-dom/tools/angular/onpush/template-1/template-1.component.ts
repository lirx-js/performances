import { Component, ChangeDetectionStrategy } from '@angular/core';

[{imports}]

@Component({
  selector: '[{name}]',
  standalone: true,
  templateUrl: './[{name}].component.html',
  styleUrl: './[{name}].component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    [{components}]
  ]
})
export class [{namePascalCase}]Component {
}

