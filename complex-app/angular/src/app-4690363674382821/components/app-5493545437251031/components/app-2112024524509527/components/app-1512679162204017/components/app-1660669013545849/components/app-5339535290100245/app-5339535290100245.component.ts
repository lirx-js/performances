import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5339535290100245',
  standalone: true,
  templateUrl: './app-5339535290100245.component.html',
  styleUrl: './app-5339535290100245.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5339535290100245Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
