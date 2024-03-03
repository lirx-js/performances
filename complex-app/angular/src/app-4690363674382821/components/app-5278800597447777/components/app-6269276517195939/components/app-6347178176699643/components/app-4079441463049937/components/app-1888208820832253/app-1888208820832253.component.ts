import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1888208820832253',
  standalone: true,
  templateUrl: './app-1888208820832253.component.html',
  styleUrl: './app-1888208820832253.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1888208820832253Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
