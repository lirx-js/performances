import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2790981938724573',
  standalone: true,
  templateUrl: './app-2790981938724573.component.html',
  styleUrl: './app-2790981938724573.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2790981938724573Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
