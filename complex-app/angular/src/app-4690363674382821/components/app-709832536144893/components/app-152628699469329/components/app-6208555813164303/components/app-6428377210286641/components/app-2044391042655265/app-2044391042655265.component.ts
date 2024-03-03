import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2044391042655265',
  standalone: true,
  templateUrl: './app-2044391042655265.component.html',
  styleUrl: './app-2044391042655265.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2044391042655265Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
