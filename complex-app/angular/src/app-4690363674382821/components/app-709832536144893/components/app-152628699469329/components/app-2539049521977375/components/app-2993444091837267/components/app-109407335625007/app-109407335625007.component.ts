import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-109407335625007',
  standalone: true,
  templateUrl: './app-109407335625007.component.html',
  styleUrl: './app-109407335625007.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App109407335625007Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
