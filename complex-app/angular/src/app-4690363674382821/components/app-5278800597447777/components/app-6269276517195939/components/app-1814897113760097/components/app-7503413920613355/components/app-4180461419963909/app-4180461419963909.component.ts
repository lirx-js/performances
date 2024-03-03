import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4180461419963909',
  standalone: true,
  templateUrl: './app-4180461419963909.component.html',
  styleUrl: './app-4180461419963909.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4180461419963909Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
