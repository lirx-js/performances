import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-905841083326273',
  standalone: true,
  templateUrl: './app-905841083326273.component.html',
  styleUrl: './app-905841083326273.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App905841083326273Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
