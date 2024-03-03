import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6474938223152855',
  standalone: true,
  templateUrl: './app-6474938223152855.component.html',
  styleUrl: './app-6474938223152855.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6474938223152855Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
