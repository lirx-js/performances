import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1907175419274849',
  standalone: true,
  templateUrl: './app-1907175419274849.component.html',
  styleUrl: './app-1907175419274849.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1907175419274849Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
