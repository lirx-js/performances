import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6299011042311695',
  standalone: true,
  templateUrl: './app-6299011042311695.component.html',
  styleUrl: './app-6299011042311695.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6299011042311695Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
