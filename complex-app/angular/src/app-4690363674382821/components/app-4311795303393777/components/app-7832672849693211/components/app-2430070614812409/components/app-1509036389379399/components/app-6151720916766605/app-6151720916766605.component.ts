import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6151720916766605',
  standalone: true,
  templateUrl: './app-6151720916766605.component.html',
  styleUrl: './app-6151720916766605.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6151720916766605Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
