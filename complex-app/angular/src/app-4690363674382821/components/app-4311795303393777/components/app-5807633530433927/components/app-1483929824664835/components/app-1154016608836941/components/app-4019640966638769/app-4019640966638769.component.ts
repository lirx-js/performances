import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4019640966638769',
  standalone: true,
  templateUrl: './app-4019640966638769.component.html',
  styleUrl: './app-4019640966638769.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4019640966638769Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
