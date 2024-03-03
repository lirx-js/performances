import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1731410649794005',
  standalone: true,
  templateUrl: './app-1731410649794005.component.html',
  styleUrl: './app-1731410649794005.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1731410649794005Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
