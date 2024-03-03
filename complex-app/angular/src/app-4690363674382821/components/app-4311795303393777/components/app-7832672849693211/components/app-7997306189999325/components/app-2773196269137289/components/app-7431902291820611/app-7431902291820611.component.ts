import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7431902291820611',
  standalone: true,
  templateUrl: './app-7431902291820611.component.html',
  styleUrl: './app-7431902291820611.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7431902291820611Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
