import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1852988176328017',
  standalone: true,
  templateUrl: './app-1852988176328017.component.html',
  styleUrl: './app-1852988176328017.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1852988176328017Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
