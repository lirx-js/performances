import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7377574579413269',
  standalone: true,
  templateUrl: './app-7377574579413269.component.html',
  styleUrl: './app-7377574579413269.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7377574579413269Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
