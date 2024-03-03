import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6421126440041243',
  standalone: true,
  templateUrl: './app-6421126440041243.component.html',
  styleUrl: './app-6421126440041243.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6421126440041243Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
