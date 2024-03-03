import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1794808872439911',
  standalone: true,
  templateUrl: './app-1794808872439911.component.html',
  styleUrl: './app-1794808872439911.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1794808872439911Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
