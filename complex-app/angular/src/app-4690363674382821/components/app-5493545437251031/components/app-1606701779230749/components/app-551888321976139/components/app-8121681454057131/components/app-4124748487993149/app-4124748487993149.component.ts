import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4124748487993149',
  standalone: true,
  templateUrl: './app-4124748487993149.component.html',
  styleUrl: './app-4124748487993149.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4124748487993149Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
