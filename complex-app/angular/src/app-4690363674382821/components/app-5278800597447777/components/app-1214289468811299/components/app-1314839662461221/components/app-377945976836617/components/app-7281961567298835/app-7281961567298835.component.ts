import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7281961567298835',
  standalone: true,
  templateUrl: './app-7281961567298835.component.html',
  styleUrl: './app-7281961567298835.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7281961567298835Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
