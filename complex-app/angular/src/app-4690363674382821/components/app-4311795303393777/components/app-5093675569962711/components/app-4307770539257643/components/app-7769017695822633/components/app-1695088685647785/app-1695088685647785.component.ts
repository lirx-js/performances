import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1695088685647785',
  standalone: true,
  templateUrl: './app-1695088685647785.component.html',
  styleUrl: './app-1695088685647785.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1695088685647785Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
