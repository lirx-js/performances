import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6879003955663095',
  standalone: true,
  templateUrl: './app-6879003955663095.component.html',
  styleUrl: './app-6879003955663095.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6879003955663095Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
