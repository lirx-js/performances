import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8257826359640855',
  standalone: true,
  templateUrl: './app-8257826359640855.component.html',
  styleUrl: './app-8257826359640855.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8257826359640855Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
