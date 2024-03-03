import { Component } from '@angular/core';

@Component({
  selector: '[{name}]',
  standalone: true,
  templateUrl: './[{name}].component.html',
  styleUrl: './[{name}].component.scss',
})
export class [{namePascalCase}]Component {
  date: string = '';

  constructor() {
    setInterval(() => {
      this.date = new Date().toString();
    }, 1000);
  }
}
