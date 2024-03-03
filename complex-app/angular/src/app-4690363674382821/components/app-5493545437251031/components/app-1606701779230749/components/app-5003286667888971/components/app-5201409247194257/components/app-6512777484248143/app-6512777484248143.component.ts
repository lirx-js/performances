import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6512777484248143',
  standalone: true,
  templateUrl: './app-6512777484248143.component.html',
  styleUrl: './app-6512777484248143.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6512777484248143Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
