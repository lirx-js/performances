import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6941208376255493',
  standalone: true,
  templateUrl: './app-6941208376255493.component.html',
  styleUrl: './app-6941208376255493.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6941208376255493Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
