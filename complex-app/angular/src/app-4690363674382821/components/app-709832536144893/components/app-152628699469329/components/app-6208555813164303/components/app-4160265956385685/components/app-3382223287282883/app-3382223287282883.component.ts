import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3382223287282883',
  standalone: true,
  templateUrl: './app-3382223287282883.component.html',
  styleUrl: './app-3382223287282883.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3382223287282883Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
