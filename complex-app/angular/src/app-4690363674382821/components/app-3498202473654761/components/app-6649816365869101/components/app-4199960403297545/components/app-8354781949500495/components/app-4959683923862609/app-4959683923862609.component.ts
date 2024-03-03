import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4959683923862609',
  standalone: true,
  templateUrl: './app-4959683923862609.component.html',
  styleUrl: './app-4959683923862609.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4959683923862609Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
