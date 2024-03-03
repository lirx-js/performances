import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8292148236058417',
  standalone: true,
  templateUrl: './app-8292148236058417.component.html',
  styleUrl: './app-8292148236058417.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8292148236058417Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
