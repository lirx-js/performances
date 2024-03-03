import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6694905431658775',
  standalone: true,
  templateUrl: './app-6694905431658775.component.html',
  styleUrl: './app-6694905431658775.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6694905431658775Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
