import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1234857040831615',
  standalone: true,
  templateUrl: './app-1234857040831615.component.html',
  styleUrl: './app-1234857040831615.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1234857040831615Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
