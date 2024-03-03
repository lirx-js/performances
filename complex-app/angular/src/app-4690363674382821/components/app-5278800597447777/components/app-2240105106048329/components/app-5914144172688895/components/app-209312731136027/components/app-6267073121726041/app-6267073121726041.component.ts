import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6267073121726041',
  standalone: true,
  templateUrl: './app-6267073121726041.component.html',
  styleUrl: './app-6267073121726041.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6267073121726041Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
