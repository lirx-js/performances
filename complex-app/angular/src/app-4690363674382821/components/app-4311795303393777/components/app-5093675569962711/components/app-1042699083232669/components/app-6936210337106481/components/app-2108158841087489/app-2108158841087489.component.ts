import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2108158841087489',
  standalone: true,
  templateUrl: './app-2108158841087489.component.html',
  styleUrl: './app-2108158841087489.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2108158841087489Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
