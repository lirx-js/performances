import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3609895812273343',
  standalone: true,
  templateUrl: './app-3609895812273343.component.html',
  styleUrl: './app-3609895812273343.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3609895812273343Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
