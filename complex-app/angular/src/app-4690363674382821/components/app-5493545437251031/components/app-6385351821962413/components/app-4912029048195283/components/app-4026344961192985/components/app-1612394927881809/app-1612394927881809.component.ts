import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1612394927881809',
  standalone: true,
  templateUrl: './app-1612394927881809.component.html',
  styleUrl: './app-1612394927881809.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1612394927881809Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
