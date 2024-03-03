import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2687349603888529',
  standalone: true,
  templateUrl: './app-2687349603888529.component.html',
  styleUrl: './app-2687349603888529.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2687349603888529Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
