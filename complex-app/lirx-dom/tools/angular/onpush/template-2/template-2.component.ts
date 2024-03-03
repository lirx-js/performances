import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: '[{name}]',
  standalone: true,
  templateUrl: './[{name}].component.html',
  styleUrl: './[{name}].component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class [{namePascalCase}]Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
