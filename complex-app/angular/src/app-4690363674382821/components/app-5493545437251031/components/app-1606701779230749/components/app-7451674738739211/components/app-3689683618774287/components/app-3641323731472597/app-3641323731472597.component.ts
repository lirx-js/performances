import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3641323731472597',
  standalone: true,
  templateUrl: './app-3641323731472597.component.html',
  styleUrl: './app-3641323731472597.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3641323731472597Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
