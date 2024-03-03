import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6104620348291959',
  standalone: true,
  templateUrl: './app-6104620348291959.component.html',
  styleUrl: './app-6104620348291959.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6104620348291959Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
