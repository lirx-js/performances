import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3409691990217349',
  standalone: true,
  templateUrl: './app-3409691990217349.component.html',
  styleUrl: './app-3409691990217349.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3409691990217349Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
