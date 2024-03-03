import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2138099033497153',
  standalone: true,
  templateUrl: './app-2138099033497153.component.html',
  styleUrl: './app-2138099033497153.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2138099033497153Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
