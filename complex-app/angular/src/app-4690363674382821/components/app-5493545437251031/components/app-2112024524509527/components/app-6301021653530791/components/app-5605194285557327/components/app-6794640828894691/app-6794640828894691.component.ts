import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6794640828894691',
  standalone: true,
  templateUrl: './app-6794640828894691.component.html',
  styleUrl: './app-6794640828894691.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6794640828894691Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
