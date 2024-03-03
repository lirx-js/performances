import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2660571225375129',
  standalone: true,
  templateUrl: './app-2660571225375129.component.html',
  styleUrl: './app-2660571225375129.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2660571225375129Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
