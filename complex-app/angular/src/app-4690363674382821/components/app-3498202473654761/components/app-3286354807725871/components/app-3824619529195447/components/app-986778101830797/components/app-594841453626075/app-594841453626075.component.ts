import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-594841453626075',
  standalone: true,
  templateUrl: './app-594841453626075.component.html',
  styleUrl: './app-594841453626075.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App594841453626075Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
