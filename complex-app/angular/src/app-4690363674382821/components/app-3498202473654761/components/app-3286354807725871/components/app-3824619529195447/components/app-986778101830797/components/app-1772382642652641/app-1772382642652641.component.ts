import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1772382642652641',
  standalone: true,
  templateUrl: './app-1772382642652641.component.html',
  styleUrl: './app-1772382642652641.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1772382642652641Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
