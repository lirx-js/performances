import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-101716757446545',
  standalone: true,
  templateUrl: './app-101716757446545.component.html',
  styleUrl: './app-101716757446545.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App101716757446545Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
