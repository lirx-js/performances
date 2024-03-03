import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4328853738817277',
  standalone: true,
  templateUrl: './app-4328853738817277.component.html',
  styleUrl: './app-4328853738817277.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4328853738817277Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
