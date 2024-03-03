import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3903201627776319',
  standalone: true,
  templateUrl: './app-3903201627776319.component.html',
  styleUrl: './app-3903201627776319.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3903201627776319Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
