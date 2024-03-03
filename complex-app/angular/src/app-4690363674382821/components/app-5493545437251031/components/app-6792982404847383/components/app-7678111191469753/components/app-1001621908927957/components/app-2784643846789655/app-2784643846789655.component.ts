import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2784643846789655',
  standalone: true,
  templateUrl: './app-2784643846789655.component.html',
  styleUrl: './app-2784643846789655.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2784643846789655Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
