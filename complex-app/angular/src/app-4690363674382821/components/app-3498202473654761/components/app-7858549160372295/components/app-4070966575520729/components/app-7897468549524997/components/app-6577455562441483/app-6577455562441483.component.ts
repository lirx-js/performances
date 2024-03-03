import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6577455562441483',
  standalone: true,
  templateUrl: './app-6577455562441483.component.html',
  styleUrl: './app-6577455562441483.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6577455562441483Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
