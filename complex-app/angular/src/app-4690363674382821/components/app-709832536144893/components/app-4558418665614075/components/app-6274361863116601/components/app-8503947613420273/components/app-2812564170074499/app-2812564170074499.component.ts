import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2812564170074499',
  standalone: true,
  templateUrl: './app-2812564170074499.component.html',
  styleUrl: './app-2812564170074499.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2812564170074499Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
