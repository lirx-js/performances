import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-241714929374731',
  standalone: true,
  templateUrl: './app-241714929374731.component.html',
  styleUrl: './app-241714929374731.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App241714929374731Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
