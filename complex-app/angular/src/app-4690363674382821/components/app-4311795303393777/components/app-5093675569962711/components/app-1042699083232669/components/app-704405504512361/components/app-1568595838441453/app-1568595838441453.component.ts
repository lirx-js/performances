import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1568595838441453',
  standalone: true,
  templateUrl: './app-1568595838441453.component.html',
  styleUrl: './app-1568595838441453.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1568595838441453Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
