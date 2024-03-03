import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-640538993461543',
  standalone: true,
  templateUrl: './app-640538993461543.component.html',
  styleUrl: './app-640538993461543.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App640538993461543Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
