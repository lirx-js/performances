import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1451613611054733',
  standalone: true,
  templateUrl: './app-1451613611054733.component.html',
  styleUrl: './app-1451613611054733.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1451613611054733Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
