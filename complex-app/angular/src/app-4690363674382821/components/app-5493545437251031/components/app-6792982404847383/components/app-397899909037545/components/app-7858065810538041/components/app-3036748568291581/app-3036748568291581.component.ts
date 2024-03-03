import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3036748568291581',
  standalone: true,
  templateUrl: './app-3036748568291581.component.html',
  styleUrl: './app-3036748568291581.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3036748568291581Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
