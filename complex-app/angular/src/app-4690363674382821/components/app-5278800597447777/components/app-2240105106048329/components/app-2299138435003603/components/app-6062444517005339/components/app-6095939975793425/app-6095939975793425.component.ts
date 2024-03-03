import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6095939975793425',
  standalone: true,
  templateUrl: './app-6095939975793425.component.html',
  styleUrl: './app-6095939975793425.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6095939975793425Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
