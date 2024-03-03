import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1695136565294413',
  standalone: true,
  templateUrl: './app-1695136565294413.component.html',
  styleUrl: './app-1695136565294413.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1695136565294413Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
