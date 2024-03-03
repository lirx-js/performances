import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5538618980449679',
  standalone: true,
  templateUrl: './app-5538618980449679.component.html',
  styleUrl: './app-5538618980449679.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5538618980449679Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
