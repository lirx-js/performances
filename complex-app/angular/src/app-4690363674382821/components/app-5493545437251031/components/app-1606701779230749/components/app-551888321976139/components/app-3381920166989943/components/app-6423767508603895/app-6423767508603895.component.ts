import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6423767508603895',
  standalone: true,
  templateUrl: './app-6423767508603895.component.html',
  styleUrl: './app-6423767508603895.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6423767508603895Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
