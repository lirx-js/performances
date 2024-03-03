import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6728191949469089',
  standalone: true,
  templateUrl: './app-6728191949469089.component.html',
  styleUrl: './app-6728191949469089.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6728191949469089Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
