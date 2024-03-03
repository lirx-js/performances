import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2596823176699273',
  standalone: true,
  templateUrl: './app-2596823176699273.component.html',
  styleUrl: './app-2596823176699273.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2596823176699273Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
