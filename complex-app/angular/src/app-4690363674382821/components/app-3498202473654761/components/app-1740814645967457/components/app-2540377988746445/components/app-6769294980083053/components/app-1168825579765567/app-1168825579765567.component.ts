import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1168825579765567',
  standalone: true,
  templateUrl: './app-1168825579765567.component.html',
  styleUrl: './app-1168825579765567.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1168825579765567Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
