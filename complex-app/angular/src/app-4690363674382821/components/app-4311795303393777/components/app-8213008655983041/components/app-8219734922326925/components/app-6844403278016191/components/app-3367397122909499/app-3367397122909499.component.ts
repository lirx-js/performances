import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3367397122909499',
  standalone: true,
  templateUrl: './app-3367397122909499.component.html',
  styleUrl: './app-3367397122909499.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3367397122909499Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
