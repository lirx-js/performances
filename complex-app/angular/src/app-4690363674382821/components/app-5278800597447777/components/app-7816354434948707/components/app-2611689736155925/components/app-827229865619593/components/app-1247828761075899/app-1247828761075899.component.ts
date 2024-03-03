import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1247828761075899',
  standalone: true,
  templateUrl: './app-1247828761075899.component.html',
  styleUrl: './app-1247828761075899.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1247828761075899Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
