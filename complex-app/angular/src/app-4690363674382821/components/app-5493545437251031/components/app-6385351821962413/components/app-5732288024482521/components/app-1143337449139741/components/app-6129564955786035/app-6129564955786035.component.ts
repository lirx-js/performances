import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6129564955786035',
  standalone: true,
  templateUrl: './app-6129564955786035.component.html',
  styleUrl: './app-6129564955786035.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6129564955786035Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
