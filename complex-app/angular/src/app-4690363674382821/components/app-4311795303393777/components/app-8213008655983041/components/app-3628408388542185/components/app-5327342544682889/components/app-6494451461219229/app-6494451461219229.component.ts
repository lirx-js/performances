import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6494451461219229',
  standalone: true,
  templateUrl: './app-6494451461219229.component.html',
  styleUrl: './app-6494451461219229.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6494451461219229Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
