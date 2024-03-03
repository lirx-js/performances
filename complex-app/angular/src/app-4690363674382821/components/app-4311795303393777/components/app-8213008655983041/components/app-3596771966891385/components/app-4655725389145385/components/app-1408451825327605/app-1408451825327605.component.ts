import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1408451825327605',
  standalone: true,
  templateUrl: './app-1408451825327605.component.html',
  styleUrl: './app-1408451825327605.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1408451825327605Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
