import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6347385006654157',
  standalone: true,
  templateUrl: './app-6347385006654157.component.html',
  styleUrl: './app-6347385006654157.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6347385006654157Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
