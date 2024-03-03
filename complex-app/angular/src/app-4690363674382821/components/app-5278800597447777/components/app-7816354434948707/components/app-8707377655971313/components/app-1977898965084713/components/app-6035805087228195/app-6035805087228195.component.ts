import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6035805087228195',
  standalone: true,
  templateUrl: './app-6035805087228195.component.html',
  styleUrl: './app-6035805087228195.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6035805087228195Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
