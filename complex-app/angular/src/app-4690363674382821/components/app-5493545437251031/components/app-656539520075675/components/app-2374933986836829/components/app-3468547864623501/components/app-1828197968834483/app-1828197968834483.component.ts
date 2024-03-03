import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1828197968834483',
  standalone: true,
  templateUrl: './app-1828197968834483.component.html',
  styleUrl: './app-1828197968834483.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1828197968834483Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
