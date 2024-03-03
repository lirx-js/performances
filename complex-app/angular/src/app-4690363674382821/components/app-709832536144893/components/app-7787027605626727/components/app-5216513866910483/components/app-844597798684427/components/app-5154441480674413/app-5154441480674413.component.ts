import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5154441480674413',
  standalone: true,
  templateUrl: './app-5154441480674413.component.html',
  styleUrl: './app-5154441480674413.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5154441480674413Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
