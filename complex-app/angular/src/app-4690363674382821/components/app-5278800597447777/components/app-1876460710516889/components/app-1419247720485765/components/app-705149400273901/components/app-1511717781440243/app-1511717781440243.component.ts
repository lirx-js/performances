import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1511717781440243',
  standalone: true,
  templateUrl: './app-1511717781440243.component.html',
  styleUrl: './app-1511717781440243.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1511717781440243Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
