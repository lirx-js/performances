import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-31558414396899',
  standalone: true,
  templateUrl: './app-31558414396899.component.html',
  styleUrl: './app-31558414396899.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App31558414396899Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
