import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7367937258250311',
  standalone: true,
  templateUrl: './app-7367937258250311.component.html',
  styleUrl: './app-7367937258250311.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7367937258250311Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
