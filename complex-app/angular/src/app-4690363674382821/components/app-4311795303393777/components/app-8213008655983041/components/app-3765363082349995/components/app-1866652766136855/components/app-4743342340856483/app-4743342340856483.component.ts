import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4743342340856483',
  standalone: true,
  templateUrl: './app-4743342340856483.component.html',
  styleUrl: './app-4743342340856483.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4743342340856483Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
