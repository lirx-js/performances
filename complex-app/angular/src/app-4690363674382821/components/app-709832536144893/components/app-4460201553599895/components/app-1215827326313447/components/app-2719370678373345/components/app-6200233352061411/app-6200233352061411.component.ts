import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6200233352061411',
  standalone: true,
  templateUrl: './app-6200233352061411.component.html',
  styleUrl: './app-6200233352061411.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6200233352061411Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
